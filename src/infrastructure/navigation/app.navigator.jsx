import React, { useContext } from "react";
import { Button, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { theme } from "../theme";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourite.context";

const Tab = createBottomTabNavigator();

const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.bg.secondary,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button onPress={() => onLogout()} title="LogOut" />
    </View>
  );
};

export const AppNavigation = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
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
            {/*Any view that is given to a component has navigation props*/}
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen
              name="Map"
              component={MapScreen}
              options={{ tabBarHideOnKeyboard: false }}
            />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
