import React from "react";
import { View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: "red"
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    top: 50
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "purple"
  }
});

export default BoxScreen;

//...StyleSheet.absoluteFillObject == top:0, right:0, left:0, bottom:0
