import "./App.css";
import React, { useState } from "react";
import {
  Button as MButton,
  TextInput,
  Container,
  Grid,
  Code,
} from "@mantine/core";

import { useGoogleLogin } from "@react-oauth/google";
// import { google } from "googleapis";
// import { OAuth2Client } from "google-auth-library";
import { TokenResponse } from "./constants/google-auth.types";

// const CLIENT_ID =
//   "815017879896-cuosdebbjmvlm3l41aevv4kqogi5nk6t.apps.googleusercontent.com";
// const CLIENT_SECRET = "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";

function App() {
  // const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);
  const [emailInputvalue, setEmailInputvalue] = useState("Search email");
  const [userToken, setUserToken] = useState<string>();
  const [specificUserData, setSpecificUserData] = useState<any>("None");

  const onLoginSuccess = (tokenResponse: TokenResponse) => {
    console.log(tokenResponse);
    console.log(tokenResponse.access_token);
    const accessToken = tokenResponse.access_token;
    setUserToken(accessToken);
    // oauth2Client.setCredentials(tokenResponse);
  };

  const login = useGoogleLogin({
    onSuccess: onLoginSuccess,
    flow: "implicit",
    scope: "https://www.googleapis.com/auth/admin.directory.user",
  });

  const getUserList = async (token: string) => {
    const response = await fetch(
      "https://admin.googleapis.com/admin/directory/v1/users?customer=my_customer",
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  };

  const getSpecificUser = async (token: string, email: string) => {
    const response = await fetch(
      `https://admin.googleapis.com/admin/directory/v1/users/${email}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .then(function (data) {
        setSpecificUserData(data);
      });
  };

  return (
    <div className="App">
      <Container>
        <Button onClick={login} color="crimson" text="Auth Me"></Button>
        <Button
          onClick={() => getUserList(userToken ?? "")}
          // onClick={() => listUsers(oauth2Client)}
          text="Test authorized function"
        ></Button>
      </Container>
      <Grid>
        <Grid.Col span={8}>
          <TextInput
            variant="default"
            placeholder={emailInputvalue}
            onChange={(event) => setEmailInputvalue(event.currentTarget.value)}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <MButton
            onClick={() => getSpecificUser(userToken ?? "", emailInputvalue)}
          >
            Query User
          </MButton>
        </Grid.Col>
      </Grid>
      <Grid>
        <Code block>{specificUserData}</Code>
      </Grid>
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

type InputProps = {
  value: string;
  setValue: (value: string) => void;
  text: string;
};

// const Input = ({ value, setValue, text }: InputProps) => {
//   return (
//     <input
//       onChange={(inputValue) => setValue(inputValue)}
//       type="text"
//       id="name"
//       name="name"
//     />
//   );
// };
