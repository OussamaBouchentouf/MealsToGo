import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { Platform } from "react-native";

import { LocationContext } from "../../../services/location/location.context";

const isAndroid = Platform.OS === "android " ? true : false;

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

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, []);

  return (
    <SearchView>
      <MySearchbar
        placeholder="Search for a location"
        keyboardAppearance="dark"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        enablesReturnKeyAutomatically
      />
    </SearchView>
  );
};
