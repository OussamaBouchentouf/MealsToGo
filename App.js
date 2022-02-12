import React from "react";
import { StatusBar } from "react-native";
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

import { theme } from "./src/infrastructure/theme";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { NavigationComponents } from "./src/infrastructure/navigation/index.Navigator";

export default function App() {
  let [oswaldLoader] = useOswals({
    Oswald_400Regular,
  });
  let [latoLoader] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!oswaldLoader || !latoLoader) return null;

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.ui.disabled}
        barStyle="dark-content"
      />
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <NavigationComponents />
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
}
