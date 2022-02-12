import camelize from "camelize";
import { mocks, mockImages } from "./mock";

export const restaurantRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map(() => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTmp: restaurant.business_status === "CLOSED_TEMPORARILY",
      adress: restaurant.vicinity,
      rating: restaurant.rating,
    };
  });
  return camelize(mappedResults);
};
