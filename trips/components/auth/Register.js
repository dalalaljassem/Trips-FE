import React, { useState } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { Button, Text } from "@rneui/base";
import { Input } from "@rneui/themed-edge";
import authStore from "../../stores/authStore";

const Register = ({ navigation }) => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signup(user);
  };
  return (
    <>
      <SafeAreaView>
        <Text h2>🗺 Trips</Text>
        <Input
          onChangeText={(email) => {
            setUser({ ...user, email });
          }}
          placeholder="Email"
          errorMessage={false && "ENTER A VALID ERROR HERE"}
        />
        <Input
          onChangeText={(username) => {
            setUser({ ...user, username });
          }}
          placeholder="username"
          errorMessage={false && "ENTER A VALID ERROR HERE"}
        />

        <Input
          onChangeText={(password) => {
            setUser({ ...user, password });
          }}
          placeholder="Password"
          secureTextEntry={true}
        />

        <Button onPress={handleSubmit}>Register</Button>
        <Text>Have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("Login")}>
          <Text style={{ color: "blue" }}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  subHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10,
  },
});

export default Register;
