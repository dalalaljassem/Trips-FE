import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { Button, Text } from "@rneui/base";
import { Input } from "@rneui/themed-edge";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const Login = ({ navigation }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.replace("Home");
  };

  useEffect(() => {
    if (authStore.user) navigation.replace("Home");
  }, [authStore.user]);

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
          onChangeText={(password) => {
            setUser({ ...user, password });
          }}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button onPress={handleSubmit}>Login</Button>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("Register")}>
          <Text style={{ color: "blue" }}>Register</Text>
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

export default observer(Login);
