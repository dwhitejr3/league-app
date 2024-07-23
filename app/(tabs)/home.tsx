import { ScrollView, View, Text } from "react-native";
import React from "react";
import CardList from "@/components/card/CardList";
import CardItem from "@/components/card/CardItem";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="h-full bg-black">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <CardItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
