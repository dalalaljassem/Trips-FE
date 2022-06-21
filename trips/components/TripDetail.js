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
import tripStore from "../stores/TripStore";

function TripDetails({ route }) {
  const { trip, id } = route.params;
  const trips = tripStore.fetchTrip(id);

  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.image} source={trips.image} />

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{trips.title}</Text>
          <Text style={styles.description}>{trips.description}</Text>
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
