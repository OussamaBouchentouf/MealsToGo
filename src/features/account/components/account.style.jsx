import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";
import { Dimensions } from "react-native";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255,255,255,0.7)
  padding: 20px;
  margin-top : 2%;
  justify-content : center;
  margin-bottom : 30px;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: 08px;
  border-radius: 10px;
  width: ${Dimensions.get("screen").width * 0.4};
  align-self: center;
`;

export const AuthInput = styled(TextInput).attrs({ mode: "outlined" })`
  width: ${Dimensions.get("screen").width * 0.8}px;
  margin-bottom: 10px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const Title = styled.Text`
  margin-top: 2%;
  font-size: 50px;
  font-family: Comforter_400Regular;
`;

export const ErrorContainer = styled.View`
  max-width: ${Dimensions.get("screen").width * 0.8}px;
  align-items: center;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const AnimationWrapper = styled.View`
  position: absolute;
  top: 8%;
  width: 100%;
  height: 30%;
  opacity: 0.9;
`;
