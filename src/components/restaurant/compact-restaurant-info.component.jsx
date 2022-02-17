import React from "react";
import { WebView } from "react-native-webview";
import styled from "styled-components/native";

const CompactImage = styled.Image`
  border-radius: 20px;
  width: 140px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 140px;
  height: 100px;
`;

const Item = styled.View`
  border-radius: 50px;
  padding: 10px;
  max-width: 150px;
  align-items: center;
`;

const MyText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  margin-top: 15px;
`;

export const CompactRestaurantInfo = ({ restaurant, isAndroid }) => {
  const Image = isAndroid ? CompactWebview : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <MyText>{restaurant.name}</MyText>
    </Item>
  );
};
