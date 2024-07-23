import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabIcon = ({ name, size, color }) => {
  return (
    <View>
      <Ionicons name={name} size={size} color={color} />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          //   tabBarShowLabel: false,
          tabBarActiveTintColor: "#00FF00",
          tabBarInactiveTintColor: "#FFFFFF",
          tabBarStyle: {
            backgroundColor: "#000000",
            borderTopWidth: 2,
            borderTopColor: "#00FF00",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="home" size={20} color={"white"} />
            ),
          }}
        />

        <Tabs.Screen
          name="stats"
          options={{
            title: "Stats",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="stats-chart" size={20} color={"white"} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Player Card",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="person" size={20} color={"white"} />
            ),
          }}
        />
        <Tabs.Screen
          name="schedule"
          options={{
            title: "Schedule",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="calendar" size={20} color={"white"} />
            ),
          }}
        />
        <Tabs.Screen
          name="standings"
          options={{
            title: "Standings",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="trending-up-outline" size={20} color={"white"} />
            ),
          }}
        />
        <Tabs.Screen
          name="awardRaces"
          options={{
            title: "Award Races",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="trophy" size={20} color={"white"} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
