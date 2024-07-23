import { SafeAreaView, View, ScrollView, Text } from "react-native";
import React from "react";
import CardItem from "@/components/card/CardItem";

const Stats = () => {
  return (
    <SafeAreaView className="h-full bg-black">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <CardItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Stats;
