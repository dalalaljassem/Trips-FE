import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RootNavigator from "./RootNavigator";

function TabNavigator() {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="Home"
        component={RootNavigator}
        options={{
          tabBarLabel: "Home",
        }}
      />
    </Navigator>
  );
}

export default TabNavigator;
