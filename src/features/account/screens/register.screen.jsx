import React, { useState, useContext } from "react";
import { Text } from "react-native";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from "../components/account.style";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { onSignUp, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          visible-password="email-address"
          onChangeText={(u) => setEmail(u)}
        />
        <AuthInput
          label="Password"
          value={password}
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(u) => setPassword(u)}
        />
        <ErrorContainer>
          {error && <Text style={{ color: "red" }}>{error}</Text>}
        </ErrorContainer>
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => {
            onSignUp(email, password);
          }}
        >
          Register
        </AuthButton>
      </AccountContainer>
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};
