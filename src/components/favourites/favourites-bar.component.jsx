import React from "react";
import {
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import styled from "styled-components/native";
import { theme } from "../../infrastructure/theme";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";

const FavouritesWrapper = styled.View`
  padding: 5px;
  align-items: center;
  margin-bottom: 10px;
  height: ${Dimensions.get("window").height * 0.3}px;
  align-self: center;
  width: 95%;
  background-color: ${theme.colors.ui.tertiary};
  border-radius: 20px;
`;

export const FavouriteBar = ({ favourites, onNavigate }) => {
  return (
    <FavouritesWrapper>
      <Text style={{ fontWeight: "bold", alignSelf: "flex-start" }}>
        Favourites
      </Text>
      {favourites.length ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favourites.map((restaurant) => {
            const key = restaurant.name;
            return (
              <View key={key} style={{ marginTop: 10, marginLeft: 8 }}>
                <TouchableOpacity
                  onPress={() => {
                    onNavigate("RestaurantsDetails", {
                      restaurantFromRoute: restaurant,
                    });
                  }}
                >
                  <CompactRestaurantInfo restaurant={restaurant} />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            alignSelf: "center",
            marginTop: "15%",
          }}
        >
          Nothing yet :D !
        </Text>
      )}
    </FavouritesWrapper>
  );
};
