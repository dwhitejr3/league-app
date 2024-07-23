import { StyleSheet, View, Text } from "react-native";
import React from "react";

const CardList = () => {
  return (
    <View style={styles.container}>
      <Text>CardList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#404040",
    flex: 1,
    width: "47%",
  },
});
export default CardList;
