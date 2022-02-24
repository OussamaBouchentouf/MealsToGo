import React, { useState, useEffect, useContext } from "react";
import { Pressable, Keyboard, Dimensions } from "react-native";
import MapView from "react-native-maps";

import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { MapCallout } from "../components/map-callout.component";
import { FadeAnim } from "../../animations/fade.animation";

const Map = styled(MapView)`
  height: ${Dimensions.get("screen").height}px;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    const latDelta = northeastLat - southwestLat;
    setLatDelta(latDelta);
  }, [location, viewport]);
  return (
    <Pressable onPress={() => Keyboard.dismiss()}>
      <FadeAnim>
        <Search />
        <Map
          region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02,
          }}
        >
          {restaurants.map((restaurant) => {
            return (
              <MapView.Marker
                key={restaurant.name}
                title={restaurant.name}
                coordinate={{
                  latitude: restaurant.geometry.location.lat,
                  longitude: restaurant.geometry.location.lng,
                }}
              >
                <MapView.Callout
                  onPress={() => {
                    navigation.navigate("RestaurantsDetails", {
                      restaurantFromRoute: restaurant,
                    });
                  }}
                >
                  <MapCallout restaurant={restaurant} />
                </MapView.Callout>
              </MapView.Marker>
            );
          })}
        </Map>
      </FadeAnim>
    </Pressable>
  );
};
