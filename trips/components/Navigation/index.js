import { createStackNavigator } from "@react-navigation/stack";
import { TripDetail } from "../TripDetail";
import { TripDetail } from "../TripDetail";
import tripStore from "../../stores/tripStore";
const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="TripList" component={TripList} />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={({ route }) => {
          const { id } = route.params;
          return {
            title: tripStore.getTripById(id).name,
          };
        }}
      />
      <Screen name="Profile" />
    </Navigator>
  );
};

export default RootNavigator;
