import React from "react";
import { FlatList, StyleSheet } from "react-native";
import tripStore from "../stores/tripStore.js";
import { Trip } from "./Trip.js";

export function TripList({ navigation }) {
  const trips = tripStore.getTrips();

  function renderTrip({ item: trip }) {
    return (
      <Trip
        trip={trip}
        onPress={() => {
          navigation.navigate("TripDetails", { id: trip.id });
        }}
      />
    );
  }

  return (
    <FlatList
      style={styles.tripList}
      contentContainerStyle={styles.tripListContainer}
      data={trips}
      renderItem={renderTrip}
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
