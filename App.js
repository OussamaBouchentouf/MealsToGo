import React from "react";
import { Platform, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";

import * as firebase from "firebase";

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
import { FavouritesContextProvider } from "./src/services/favourites/favourite.context";
import { NavigationComponents } from "./src/infrastructure/navigation/index.Navigator";

const isAndroid = Platform.OS === "android" ? true : false;

const firebaseConfig = {
  apiKey: "AIzaSyBG6rUiiHpHwnn5R2plqyK37au1LhcikHQ",
  authDomain: "mealstogo-fbd93.firebaseapp.com",
  projectId: "mealstogo-fbd93",
  storageBucket: "mealstogo-fbd93.appspot.com",
  messagingSenderId: "586160479526",
  appId: "1:586160479526:web:e38dfd460c345aa5c335e7",
};

firebase.initializeApp(firebaseConfig);

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
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <NavigationComponents />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
    </>
  );
}
