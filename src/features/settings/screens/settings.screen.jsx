import React, { useContext } from "react";
import { SafeAreaView, Text } from "react-native";
import { List, Avatar } from "react-native-paper";

import styled from "styled-components/native";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: 16px;
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const EmailAddress = styled.Text`
  align-items: center;
  margin-top: 20px;
  font-size: 17px;
  font-weight: bold;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <EmailAddress>{user.email}</EmailAddress>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeAreaView>
  );
};
