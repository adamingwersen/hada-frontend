import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  GoogleLogin,
  hasGrantedAnyScopeGoogle,
  useGoogleLogin,
} from "@react-oauth/google";
import jwt_decode from "jwt-decode";

interface GoogleJWT {
  iss: string; // The JWT's issuer
  nbf: Date;
  aud: string; // Your server's client ID
  sub: string; // The unique ID of the user's Google Account
  hd: string; // If present, the host domain of the user's GSuite email address
  email: string; // The user's email address
  email_verified: boolean; // true, if Google has verified the email address
  azp: string;
  name: string;
  // If present, a URL to user's profile picture
  picture: string;
  given_name: string;
  family_name: string;
  iat: Date; // Unix timestamp of the assertion's creation time
  exp: Date; // Unix timestamp of the assertion's expiration time
  jti: string;
}

const hasAccess = (tokenResponse: any) => {
  return hasGrantedAnyScopeGoogle(
    tokenResponse,
    "google-scope-1",
    "google-scope-2"
  );
};

function App() {
  const [firstName, setFirstName] = useState("Allan");

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: "auth-code",
    scope: "https://www.googleapis.com/auth/admin.directory.user",
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {firstName}
        </a>
      </header>

      <Button onClick={login}></Button>

      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(hasAccess(credentialResponse));
          const token = credentialResponse?.credential;
          if (!token) return;

          const tokenDecoded: GoogleJWT = jwt_decode(token);
          setFirstName(tokenDecoded.given_name);
          console.log(jwt_decode(token));
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap
      />
    </div>
  );
}

export default App;

type ButtonProps = {
  onClick: () => void;
};
const Button = ({ onClick }: ButtonProps) => {
  return (
    <div
      style={{
        width: "1000px",
        height: "420px",
        color: "red",
        backgroundColor: "red",
      }}
      onClick={onClick}
    ></div>
  );
};
