import React from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
} from "react-native";

import tripStore from "../stores/tripStore";

export function TripDetail({ route }) {
  const trip = tripStore.getTripById(route.params.id);
  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.image} source={trip.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{trip.name}</Text>
          <Text style={styles.price}>$ {trip.price}</Text>
          <Text style={styles.description}>{trip.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  image: {
    height: 300,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
});
