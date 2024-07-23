import { ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-black">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 items-center justify-center w-full">
          <Text className="text-3xl color-white">The League App</Text>
          <Link href="./(tabs)/home" style={{ color: "#00FF00" }}>
            {" "}
            Enter{" "}
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
