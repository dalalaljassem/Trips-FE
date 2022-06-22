import * as React from "react";
import "react-native-gesture-handler";
import Trip from "./components/Trip";
import { Text, View } from "react-native";
import TripList from "./components/TripList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TripDetails from "./components/TripDetail";
import TripAddModal from "./components/TripAddModal";
const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={TripList} />
        <Screen name="TripAddModal" component={TripAddModal} />
        <Screen
          name="TripDetails"
          component={TripDetails}
          options={({ route }) => ({ title: route.params.trip.title })}
        />
      </Navigator>
    </NavigationContainer>
  );
}
