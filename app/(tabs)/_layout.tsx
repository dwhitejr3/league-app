import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabIcon = ({ name, size }) => {
  return (
    <View>
      <Ionicons name={name} size={size} />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="home" size={20} />
            ),
          }}
        />

        <Tabs.Screen
          name="stats"
          options={{
            title: "Stats",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="stats-chart" size={20} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Player Card",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="person" size={20} />
            ),
          }}
        />
        <Tabs.Screen
          name="schedule"
          options={{
            title: "Schedule",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="calendar" size={20} />
            ),
          }}
        />
        <Tabs.Screen
          name="standings"
          options={{
            title: "Standings",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="trending-up-outline" size={20} />
            ),
          }}
        />
        <Tabs.Screen
          name="awardRaces"
          options={{
            title: "Award Races",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="trophy" size={20} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
