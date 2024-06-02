import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./style.css";

const root = document.querySelector("#root");

if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
