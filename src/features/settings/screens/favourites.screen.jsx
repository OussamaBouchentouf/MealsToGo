import React, { useContext } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";

import styled from "styled-components/native";

import { FavouritesContext } from "../../../services/favourites/favourite.context";
import { RestaurantInfo } from "../../restaurants/components/restaurant-info.component";

const RestaurantListView = styled.View`
  flex: 1;
  width: ${(props) => props.theme.phoneDimensions.windowWidth}px;
  background-color: ${(props) => props.theme.colors.ui.disabled};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 1,
  },
})``;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  if (!favourites.length)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Nothing yet :D !
        </Text>
      </View>
    );
  return (
    <RestaurantListView>
      <RestaurantList
        keyboardDismissMode="on-drag"
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate("RestaurantsDetails", {
                  restaurantFromRoute: item,
                });
              }}
            >
              <RestaurantInfo restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </RestaurantListView>
  );
};
