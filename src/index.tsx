import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";

const gClientId =
  "815017879896-cuosdebbjmvlm3l41aevv4kqogi5nk6t.apps.googleusercontent.com";
const CLIENT_ID =
  "815017879896-cuosdebbjmvlm3l41aevv4kqogi5nk6t.apps.googleusercontent.com";
const CLIENT_SECRET = "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";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={gClientId}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
