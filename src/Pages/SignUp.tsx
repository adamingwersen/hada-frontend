import React, { useState } from "react";

import { Button as MButton, Code, Container, Grid, TextInput } from "@mantine/core";

import { DisplayOrganisation } from "../components/Container/DisplayOrganisation/DisplayOrganisation";
import { GoogleSignUp } from "../components/Container/GoogleSignUp/GoogleSignUp";

// const CLIENT_ID =
//   "815017879896-cuosdebbjmvlm3l41aevv4kqogi5nk6t.apps.googleusercontent.com";
// const CLIENT_SECRET = "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";

export const SignUp = () => {
  const [emailInputvalue, setEmailInputvalue] = useState("Search email");
  const [userToken, setUserToken] = useState<string>();
  const [specificUserData, setSpecificUserData] = useState<any>("None");

  const getUserList = async (token: string) => {
    await fetch(
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
    await fetch(
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
        <GoogleSignUp setAccessToken={setUserToken} />
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
      <DisplayOrganisation />
    </div>
  );
};

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
