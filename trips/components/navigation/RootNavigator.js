import React from "react";
import TripDetails from "../TripDetail";
import TripList from "../TripList";
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();
export default function RootNavigator() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={TripList} />
      <Screen
        name="TripDetails"
        component={TripDetails}
        options={({ route }) => ({ title: route.params.trip.title })}
      />
    </Navigator>
  );
}
