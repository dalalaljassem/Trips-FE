import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Trip({ trip, navigation }) {
  // ! you didn't pass trip, you need to pass uri in source
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("TripDetails", { trip: trip })}
    >
      <Image style={styles.thumb} source={{ uri: trip.image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{trip.title}</Text>
        <Text style={styles.Description}>{trip.Description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  Description: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
});
