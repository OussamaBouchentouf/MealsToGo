import React from "react";

import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  Title,
} from "../components/account.style";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          style={{ marginBottom: 10 }}
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          LogIn
        </AuthButton>
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
