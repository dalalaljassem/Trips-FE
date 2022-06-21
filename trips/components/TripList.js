import React from "react";
import { FlatList, StyleSheet } from "react-native";
import tripStore from "../stores/tripStore";
import Trip from "./Trip";
import { observer } from "mobx-react";

function TripList({ navigation }) {
  const tripList = tripStore.trips.map((trip) => {
    return (
      <Trip
        trip={trip}
        key={trip._id}
        // onPress={() => navigation.navigate("TripDetails", { id: trip._id })}
        navigation={navigation}
      />
    );
  });

  function TripItem({ item: trip }) {
    return (
      <Trip
        trip={trip}
        key={trip._id}
        onPress={() => {
          navigation.navigate("TripDetails", {
            trip: trip,
            id: trip._id,
          });
        }}
      />
    );
  }
  return (
    <FlatList
      style={styles.tripList}
      contentContainerStyle={styles.tripListContainer}
      data={tripStore.trips}
      renderItem={TripItem}
    />
  );
}
const styles = StyleSheet.create({
  tripList: {
    backgroundColor: "#eeeeee",
  },
  tripListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

export default observer(TripList);
