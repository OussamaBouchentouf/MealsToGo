import React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { Text } from "react-native";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ root, navigation }) => {
  const FV = () => {
    return <Text>hellos</Text>;
  };
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen name="SettingsStack" component={SettingsScreen} />
      <SettingsStack.Screen name="Favourites" component={FV} />
    </SettingsStack.Navigator>
  );
};
