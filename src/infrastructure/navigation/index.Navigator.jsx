import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AppNavigation } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";

export const NavigationComponents = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
