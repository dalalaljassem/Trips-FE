import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { HomePage } from "./components/HomePage";
import { NotificationsScreen } from "./components/NotificationsScreen";
import tripStore from "./stores/tripStore";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" component={HomePage}>
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
