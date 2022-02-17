import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchView = styled.View`
  width: ${(props) => props.theme.phoneDimensions.windowWidth}px;
  height: ${(props) => props.theme.phoneDimensions.windowWidth * 0.15}px;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 999;
  top: 40px;
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
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchView>
      <MySearchbar
        placeholder="Search for a location"
        keyboardAppearance="dark"
        icon="map"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
          setSearchKeyword(searchKeyword.trim());
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        enablesReturnKeyAutomatically
      />
    </SearchView>
  );
};
