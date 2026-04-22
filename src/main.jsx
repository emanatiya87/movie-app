import { Provider } from "react-redux";
import store from "./redux/store";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // for dropdowns, modals, etc.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="Body">
        <App />
      </div>
    </Provider>
  </StrictMode>,
);
