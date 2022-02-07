import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfo } from "../components/restaurant-info.component";

const GlobalView = styled(SafeAreaView)`
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.disabled};
`;

const SearchView = styled.View`
  width: ${(props) => props.theme.phoneDimensions.windowWidth}px;
  height: ${(props) => props.theme.phoneDimensions.windowWidth * 0.15}px;
  align-items: center;
  justify-content: center;
`;

const MySearchbar = styled(Searchbar)`
  height: ${(props) => props.theme.sizesPourcentages[7]};
  width: ${(props) => props.theme.sizesPourcentages[9]};
  border-radius: ${(props) => props.theme.space[3]};
`;

const RestaurantListView = styled.View`
  flex: 1;
  width: ${(props) => props.theme.phoneDimensions.windowWidth}px;
  background-color: ${(props) => props.theme.colors.ui.disabled};
`;

/* the "attrs" gives us the ability to set some props of some components */
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 1,
  },
})``;

export const RestaurantScreen = () => {
  return (
    <GlobalView>
      <SearchView>
        <MySearchbar
          placeholder="Search here"
          keyboardAppearance="dark"
          enablesReturnKeyAutomatically
        />
      </SearchView>
      <RestaurantListView>
        <RestaurantList
          keyboardDismissMode="on-drag"
          data={[
            {
              name: "oussamaBouchentouf3",
              adress: "hay zitoune lot benmimoune",
              rating: 2,
            },
            {
              name: "oussamaBouchentouf2",
              adress: "hay zitoune lot benmimoune",
              rating: 2,
            },
            {
              name: "oussamaBouchentouf1",
              adress: "hay zitoune lot benmimoune",
              rating: 2,
            },
          ]}
          renderItem={() => <RestaurantInfo />}
          keyExtractor={(item) => item.name}
        />
      </RestaurantListView>
    </GlobalView>
  );
};
