import * as React from "react";
import "react-native-gesture-handler";
import Trip from "./components/Trip";
import { Text, TouchableOpacity } from "react-native";
import TripList from "./components/TripList";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TripDetails from "./components/TripDetail";
import authStore from "./stores/authStore";
const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login">
        <Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Screen
          name="Home"
          component={TripList}
          options={{
            headerRight: () => (
              <TouchableOpacity onPress={() => authStore.signout()}>
                <Text>Sign out</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Screen
          name="TripDetails"
          component={TripDetails}
          options={({ route }) => ({ title: route.params.trip.title })}
        />
      </Navigator>
    </NavigationContainer>
  );
}
