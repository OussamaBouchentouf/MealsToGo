import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetails } from "../../features/restaurants/screens/restaurant.infoCard";
import { Platform } from "react-native";

const RestaurantStack = createStackNavigator();
const isAndroid = Platform.OS === "android" ? true : false;

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={
        !isAndroid
          ? {
              headerShown: false,
              ...TransitionPresets.ModalPresentationIOS,
            }
          : {
              headerShown: false,
              ...TransitionPresets.ScaleFromCenterAndroid,
            }
      }
    >
      <RestaurantStack.Screen
        name="RestaurantsStack"
        component={RestaurantScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantsDetails"
        component={RestaurantDetails}
      />
    </RestaurantStack.Navigator>
  );
};
