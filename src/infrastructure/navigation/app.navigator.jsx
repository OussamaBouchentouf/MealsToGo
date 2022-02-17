import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { theme } from "../theme";
import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();

const SettingsScreen = () => {
  return (
    <View style={{ backgroundColor: theme.colors.bg.secondary }}>
      <Text style={{}}>Settings</Text>
    </View>
  );
};

export const AppNavigation = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};
