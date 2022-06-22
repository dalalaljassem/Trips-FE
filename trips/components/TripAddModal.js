// Formik x React Native example
import React from "react";
import { Button, TextInput, View } from "react-native";
import { Formik } from "formik";

export const TripAddModal = (props) => (
  <Formik
    initialValues={{ trip: "" }}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          onChangeText={handleChange("Trip")}
          onBlur={handleBlur("Trip")}
          value={values.trip}
        />
        <Button onPress={handleSubmit} title="Create" />
        <Button onPress={handleSubmit} title="Update" />
      </View>
    )}
  </Formik>
);
