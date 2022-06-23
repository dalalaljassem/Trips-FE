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
import { observer } from "mobx-react";
import tripStore from "../stores/tripStore"; // ! you were fetching TripStore instead of tripStore

function TripDetails({ route }) {
  const { trip, id } = route.params;
  const trips = tripStore.fetchTrip(id); // ! why? you're supposed to use trip

  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.image} source={{ uri: trip.image }} />

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{trip.title}</Text>
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
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
});
export default observer(TripDetails);
