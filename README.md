# CineStream 🎬

A React movie browsing app built as a learning / portfolio project. Users can browse movies, search, add/edit/delete entries, save favourites, and sign up or log in.

## Features

- Browse a catalog of movies with poster, rating, language, and overview
- Search movies by title (via `/movies?search=query`)
- Add, edit, and delete movies
- Save/remove favourites (persisted in `localStorage`)
- User authentication (sign up, log in, log out) with a dynamic navbar avatar
- Fully responsive UI (Bootstrap grid + MUI components)

## Tech Stack

| Layer            | Tech                                                 |
| ---------------- | ---------------------------------------------------- |
| Frontend         | React (Vite)                                         |
| State management | Redux Toolkit                                        |
| UI               | Material UI (MUI) + Bootstrap                        |
| Data storage     | [JSONBin.io](https://jsonbin.io) (mock REST backend) |
| Authentication   | [Supabase Auth](https://supabase.com)                |
| Routing          | React Router                                         |

## Why JSONBin instead of a real backend?

This project started with `json-server` for local development. Since `json-server` can't be deployed to static hosts (Vercel/Netlify/GitHub Pages), movie data is now stored and updated through JSONBin.io — a hosted JSON store with a REST-like API. Because JSONBin has no per-item routes, all writes (add/edit/delete) fetch the full movie array, modify it locally, and PUT the whole array back.

## Folder Structure

```
src/
├── api/            # axios/jsonbin/supabase client setup
├── assets/         # images, icons, static assets
├── components/     # reusable UI components (Navbar, forms, cards, etc.)
├── data/           # static/seed data
├── pages/          # route-level page components
├── redux/
│   ├── slices/     # Redux Toolkit slices (moviesSlice, authSlice)
│   └── store.js    # Redux store configuration
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### 1. Clone and install

```bash
git clone <repo-url>
cd cinestream
npm install
```

### 2. Environment variables

Copy `.env.example` to `.env` and fill in your own keys:

```dotenv
VITE_JSONBIN_URL=https://api.jsonbin.io/v3/b/your-bin-id
VITE_JSONBIN_MASTER_KEY=your-jsonbin-master-key

VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

> ⚠️ These keys are exposed client-side in the deployed build. This is acceptable for a learning/portfolio project but should not be reused for anything storing real user data.

### 3. Run locally

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

## Data Source Setup (JSONBin)

1. Create a free account at [jsonbin.io](https://jsonbin.io)
2. Create a new bin and paste in your movies JSON (must have a `results` array)
3. Copy the Bin ID and Master Key into your `.env`

## Auth Setup (Supabase)

1. Create a free project at [supabase.com](https://supabase.com)
2. Go to **Authentication → Providers → Email** and disable "Confirm email" for easier local testing
3. Copy your Project URL and anon public key into `.env`

## Known Limitations

- JSONBin writes replace the entire dataset — not designed for concurrent multi-user editing
- No image upload — poster/backdrop are entered as URLs
- Email confirmation is disabled for demo purposes; not production-auth-ready as configured

## License

This project is for educational/portfolio purposes.
