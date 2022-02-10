import React from "react";
import styled from "styled-components/native";
import { Card, Title, Paragraph } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Text, View, Image } from "react-native";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import close from "../../../../assets/close";

const RestaurantCardView = styled(Card)`
  margin: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[4]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  border-top-start-radius: ${(props) => props.theme.space[4]};
  border-top-end-radius: ${(props) => props.theme.space[4]};
`;

const RestaurantCardContent = styled(Card.Content)`
  padding: ${(props) => props.theme.space[2]};
`;

const RestaurantTitle = styled(Title)`
  font-size : ${(props) => props.theme.fontSizes.body}
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const RestaurantAdress = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Section_Rating_and_isOpen = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const RatingStar = styled(SvgXml)`
  height: 22px;
  width: 22px;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

const OpenOrClose = styled.View`
  flex-direction : row
  justify-content: center;
  align-items: center;
`;

const SvgOpenClose = styled(SvgXml)`
  height: 30px;
  width: 40px;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "some Restaurants",
    icon = null,
    photos = ["https://picsum.photos/700"],
    adress = " 100 in some street",
    isOpenNow,
    rating = 5,
    isClosedTmp,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCardView>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <RestaurantCardContent>
        <RestaurantTitle>{name}</RestaurantTitle>
        <Section_Rating_and_isOpen>
          <Rating>
            {ratingArray.map((item, index) => (
              <RatingStar xml={star} key={index} />
            ))}
          </Rating>
          <OpenOrClose>
            {isClosedTmp && (
              <Text style={{ color: "red", paddingLeft: 10 }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <View style={{ flexDirection: "row" }}>
              {isOpenNow ? (
                <SvgOpenClose xml={open} />
              ) : (
                <SvgOpenClose xml={close} />
              )}
              {icon === null ? null : (
                <Image
                  style={{ width: 20, marginLeft: 5, resizeMode: "contain" }}
                  source={{ uri: icon }}
                />
              )}
            </View>
          </OpenOrClose>
        </Section_Rating_and_isOpen>
        <RestaurantAdress>{adress}</RestaurantAdress>
      </RestaurantCardContent>
    </RestaurantCardView>
  );
};
