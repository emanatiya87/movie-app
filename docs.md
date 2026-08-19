# CineStream — Project Docs

Internal reference for how this project is built, why certain decisions were made, and how the pieces fit together. Read this when picking the project back up after time away.

---

## 1. Overview

CineStream is a React + Vite movie browsing app: browse, search, add/edit/delete movies, save favourites, and sign up/log in. Built as a portfolio/learning project to practice Redux Toolkit, MUI, and working around the constraints of a "backend-less" data layer.

---

## 2. Data Layer — JSONBin (movies)

**Why:** The project originally used `json-server` for local mock data. `json-server` cannot be deployed to static hosts (Vercel/Netlify/GitHub Pages) since it needs a persistent Node process. JSONBin.io was chosen as a free, hosted JSON store to replace it without rewriting the whole data model.

**How it works:**

- All movie data lives in a single JSON blob (one "bin") on JSONBin
- `GET {BIN_URL}/latest` → returns the full `results` array
- There is **no per-item REST route** (no `/results/:id`) — every write operation:
  1. Fetches the current full array
  2. Modifies it locally (add/edit/delete the target item)
  3. `PUT`s the **entire array** back to JSONBin

**Where this logic lives:** `src/api/jsonbin.js` (`getMovies`, `saveMovies`) and the async thunks in `src/redux/slices/moviesSlice.js` (`fetchData`, `addMovie`, `editMovie`, `handleDelete`).

**Known limitation:** Since every write overwrites the whole bin, concurrent edits from multiple users/tabs could silently overwrite each other. Not an issue for a single-user portfolio demo — would need a real database (Supabase Postgres, etc.) to fix properly.

---

## 3. Auth Layer — Supabase

**Why:** Passwords need real hashing/security — never store them in a plain JSON blob like JSONBin. Supabase Auth was chosen because it's free, handles password hashing/session tokens for you, and pairs naturally with the project's existing Supabase familiarity.

**How it works:**

- `signUp()` / `signInWithPassword()` / `signOut()` (in `src/redux/slices/authSlice.js`) talk to Supabase's auth server
- On success, Supabase stores a JWT access token + refresh token in the browser's `localStorage` automatically (key: `sb-<project-ref>-auth-token`) — this is the actual persistent record of being logged in
- Redux (`state.auth.user`) is just an **in-memory mirror** of that token, used so components can read login state synchronously without hitting `localStorage` directly
- On every app load, `App.jsx` calls `supabase.auth.getSession()` to check for a valid token, then `supabase.auth.onAuthStateChange()` keeps Redux in sync with login/logout events going forward

**Config note:** "Confirm email" is turned OFF in the Supabase dashboard (Authentication → Providers → Email) so new signups can log in immediately — fine for a demo, would be re-enabled for a real production app.

---

## 4. State Management — Redux Toolkit

Two slices:

- `moviesSlice.js` — movie list, loading/error state, favourites (favourites persisted separately to `localStorage` directly, not through Supabase/JSONBin)
- `authSlice.js` — current user, loading/error state for auth actions

Movies used to also live in a React Context (`MovieContext`) alongside Redux — this was **removed** in favor of Redux as the single source of truth, to avoid the two getting out of sync (e.g. deleting via Redux not reflecting in Context state).

---

## 5. Search

Implemented as a query param, not a separate route: `/movies?search=query`. The Navbar search input navigates to that URL; the Movies page reads `useSearchParams()` and filters the Redux `movies` list client-side by title. No separate search page/state needed since all movie data is already loaded into Redux.

---

## 6. Folder Structure

```
src/
├── api/            # jsonbin.js, supabaseClient.js
├── assets/
├── components/     # Navbar, forms, movie cards, etc.
├── data/
├── pages/
├── redux/
│   ├── slices/     # moviesSlice.js, authSlice.js
│   └── store.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 7. Environment Variables

```dotenv
VITE_JSONBIN_URL=https://api.jsonbin.io/v3/b/your-bin-id
VITE_JSONBIN_MASTER_KEY=your-jsonbin-master-key
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

`VITE_SUPABASE_URL` must be the **bare project URL** — no `/rest/v1` or other path suffix. The Supabase client appends the correct paths internally.

---

## 8. Known Issues / Things to Revisit

- JSONBin writes are all-or-nothing (full array replace) — not safe for concurrent multi-user editing
- No image upload — poster/backdrop are entered as raw URLs
- Email confirmation disabled — not production-auth-ready as currently configured
- Both JSONBin master key and Supabase anon key are exposed client-side (visible in browser dev tools) — acceptable for a portfolio project, not for anything handling real user data
