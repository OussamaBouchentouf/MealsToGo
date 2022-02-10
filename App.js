import React from "react";
import { StatusBar, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { useColorScheme } from "react-native-appearance";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  useFonts as useOswals,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

function HomeScreen() {
  return <RestaurantScreen />;
}

function SettingsScreen() {
  return (
    <>
      <Text style={{}}>Settings</Text>
    </>
  );
}

function MapScreen() {
  return (
    <>
      <Text style={{ textAlign: "center" }}>Settings</Text>
    </>
  );
}

export default function App() {
  const scheme = useColorScheme();

  let [oswaldLoader] = useOswals({
    Oswald_400Regular,
  });
  let [latoLoader] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!oswaldLoader || !latoLoader) return null;

  const Tab = createBottomTabNavigator();

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.ui.disabled}
        barStyle="dark-content"
      />
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <NavigationContainer
              theme={scheme === "dark" ? DarkTheme : DefaultTheme}
            >
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ color }) => {
                    let iconName;

                    if (route.name === "Restaurants") {
                      iconName = "restaurant";
                    } else if (route.name === "Map") {
                      iconName = "map";
                    } else {
                      iconName = "settings";
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={20} color={color} />;
                  },
                  tabBarActiveTintColor: theme.colors.brand.secondary,
                  tabBarInactiveTintColor: "gray",
                  tabBarHideOnKeyboard: true,
                  headerShown: false,
                })}
              >
                <Tab.Screen name="Restaurants" component={HomeScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
}
