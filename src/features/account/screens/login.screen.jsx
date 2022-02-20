import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Text } from "react-native";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from "../components/account.style";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          keyboardType="email-address"
          visible-password="email-address"
          autoCapitalize="none"
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
          icon="lock-open-outline"
          mode="contained"
          onPress={() => onLogin(email, password)}
        >
          Login
        </AuthButton>
      </AccountContainer>
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};
