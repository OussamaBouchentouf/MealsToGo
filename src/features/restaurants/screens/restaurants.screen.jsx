import React, { useContext } from "react";
import styled from "styled-components/native";
import {
  SafeAreaView,
  FlatList,
  DevSettings,
  RefreshControl,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { RestaurantInfo } from "../components/restaurant-info.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const GlobalView = styled(SafeAreaView)`
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.disabled};
`;

const RestaurantListView = styled.View`
  flex: 1;
  width: ${(props) => props.theme.phoneDimensions.windowWidth}px;
  background-color: ${(props) => props.theme.colors.ui.disabled};
`;

const LoadingIndicator = styled(ActivityIndicator)`
  flex: 1;
  align-self: center;
  justify-content: center;
`;

/* the "attrs" gives us the ability to set some props of some components */
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 1,
  },
})``;

export const RestaurantScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const { isLoading, error, restaurants } = useContext(RestaurantContext);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false), DevSettings.reload();
    });
  }, []);

  return (
    <GlobalView>
      <Search />
      <RestaurantListView>
        {isLoading ? (
          <LoadingIndicator animating={true} color={"blue"} size={"large"} />
        ) : (
          <RestaurantList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            keyboardDismissMode="on-drag"
            data={restaurants}
            renderItem={({ item }) => {
              return <RestaurantInfo restaurant={item} />;
            }}
            keyExtractor={(item) => item.name}
          />
        )}
      </RestaurantListView>
    </GlobalView>
  );
};
