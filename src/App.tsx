import "./App.css";

import React, { useState } from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { TokenResponse } from "./constants/google-auth.types";

function App() {
  const [userToken, setUserToken] = useState<string>();
  const onLoginSuccess = (tokenResponse: TokenResponse) => {
    console.log(tokenResponse);
    const accessToken = tokenResponse.access_token;
    setUserToken(accessToken);
  };

  const login = useGoogleLogin({
    onSuccess: onLoginSuccess,
    flow: "implicit",
    scope: "https://www.googleapis.com/auth/admin.directory.user",
  });

  const getUserList = async (token: string) => {
    const response = await fetch(
      "https://admin.googleapis.com/admin/directory/v1/users",
      {
        method: "GET",
        mode: "no-cors",
        headers: { Authorization: `Bearer ${token}`, body: "list" },
      }
    );
    console.log(response);
  };

  return (
    <div className="App">
      <Button onClick={login} color="crimson" text="Login"></Button>
      <Button
        onClick={() => getUserList(userToken ?? "")}
        text="Test authorized function"
      ></Button>
    </div>
  );
}

export default App;

type ButtonProps = {
  onClick: () => void;
  text: string;
  color?: string;
};
const Button = ({ onClick, text, color = "slateblue" }: ButtonProps) => {
  return (
    <div
      style={{
        margin: "24px",
        width: "512px",
        height: "128px",
        backgroundColor: color,
        borderRadius: "16px",
      }}
      onClick={onClick}
    >
      <h1 style={{ color: "white" }}>{text}</h1>
    </div>
  );
};
