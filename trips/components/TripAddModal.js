import React, { useReducer, useState } from "react";
import { Button, TextInput, View, Text, SafeAreaView } from "react-native";
import { Input } from "@rneui/themed-edge";
import Toast from "react-native-toast-message";
import tripStore from "../stores/tripStore";
import authStore from "../stores/authStore";

const TripAddModal = ({ navigation }) => {
  const [trip, setTrip] = useState({
    title: "",
    image: "",
    description: "",
  });

  const handleSubmit = async () => {
    if (!trip.title || !trip.description || !trip.image) {
      // await Toast.show({
      //   description: "Please fill in all fields",
      //   placement: "top",
      // });
    } else {
      await tripStore.tripCreate({ ...trip, UserId: authStore.user.id });
      navigation.replace("Home");
    }
  };

  return (
    <>
      <SafeAreaView>
        <Text> Trips</Text>
        <Input
          onChangeText={(title) => {
            setTrip({ ...trip, title });
          }}
          placeholder="Trip Name"
          errorMessage={false && "ENTER A VALID ERROR HERE"}
        />
        <Input
          onChangeText={(image) => {
            setTrip({ ...trip, image });
          }}
          placeholder="Trip image"
        />

        <Input
          onChangeText={(description) => {
            setTrip({ ...trip, description });
          }}
          placeholder="Trip Description"
        />
        <Button onPress={handleSubmit} title="Create "></Button>
      </SafeAreaView>
    </>
  );
};

export default TripAddModal;
