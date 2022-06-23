// Formik x React Native example
import React from "react";
import { Button, TextInput, View } from "react-native";
import { Formik } from "formik"; // ! did you download it?
import { Input } from "@rneui/themed-edge";

// ! you forgot to default export it and you're default importing it from App.js, we're too old for this mistake
const TripAddModal = (props) => (
  <Formik
    initialValues={{ trip: "" }}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          onChangeText={handleChange} // ! if you want to call a function in JSX as follows: {whatever()} you have to put it in an anonymous function {()=>whatever()}
          onBlur={handleBlur}
          value={values.trip}
        />
        <Input
          placeholder="Trip Name"
          onChangeText={handleChange}
          onBlur={handleBlur}
          value={values.trip}
        />
        <Button onPress={handleSubmit} title="Create" />
        <Button onPress={handleSubmit} title="Update" />
      </View>
    )}
  </Formik>
);

export default TripAddModal;
