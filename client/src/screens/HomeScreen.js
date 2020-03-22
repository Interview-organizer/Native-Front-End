import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <Text style={styles.text} Text>
      Hello World
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 20
  }
});

export default HomeScreen;
