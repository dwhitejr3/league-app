import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import React from "react";

const CardItem = () => {
  return (
    <SafeAreaView style={styles.card}>
      <Text>CardItem</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    height: "45%",
    width: "47%",
    flexDirection: "row",
    borderRadius: "10%",
    borderWidth: "0.2%",
    borderColor: "#FFFFFF",
    backgroundColor: "#282828",
    padding: 8,
    marginTop: "10px",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CardItem;
