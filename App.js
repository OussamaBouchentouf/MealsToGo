import React from "react";
import { Platform, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswals,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { useFonts, Comforter_400Regular } from "@expo-google-fonts/comforter";

import { theme } from "./src/infrastructure/theme";
import { NavigationComponents } from "./src/infrastructure/navigation/index.Navigator";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const isAndroid = Platform.OS === "android" ? true : false;

export default function App() {
  let [oswaldLoader] = useOswals({
    Oswald_400Regular,
  });
  let [latoLoader] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });
  let [comforterLoader] = useFonts({
    Comforter_400Regular,
  });

  if (!oswaldLoader || !latoLoader || !comforterLoader) return null;

  return (
    <>
      {isAndroid ? (
        <StatusBar
          backgroundColor={theme.colors.ui.disabled}
          barStyle="dark-content"
          hidden={true}
        />
      ) : (
        <StatusBar
          backgroundColor={theme.colors.ui.disabled}
          barStyle="dark-content"
        />
      )}

      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <NavigationComponents />
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
