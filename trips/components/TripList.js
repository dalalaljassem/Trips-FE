import React, { useEffect } from "react";
import tripStore from "../stores/tripStore";
import Trip from "./Trip";
import { Plus } from "react-native-feather";
import { observer } from "mobx-react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import authStore from "../stores/authStore";

function TripList({ navigation }) {
  useEffect(() => {
    if (!authStore.user) {
      navigation.replace("Login");
    }
  }, [authStore.user]);

  function TripItem({ item: trip }) {
    return (
      <Trip
        trip={trip}
        navigation={navigation} // ! you forgot to pass navigation that why it was crashing
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
    <View>
      <FlatList
        style={styles.tripList}
        contentContainerStyle={styles.tripListContainer}
        data={tripStore.trips}
        renderItem={TripItem}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TripAddModal");
        }}
        style={styles.fab}
      >
        <Plus color={"white"} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  tripList: {
    backgroundColor: "#eeeeee",
  },
  fab: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#03A9F4",
    borderRadius: 30,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 40,
    color: "white",
    alignContent: "center",
    alignItems: "center",
  },
  tripListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

export default observer(TripList);
