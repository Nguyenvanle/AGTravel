import { View } from "react-native";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text>Default Text</Text>
      <Text className="font-roboto-bold text-primary">Roboto Text</Text>
      <Text className="font-roboto-slab-semi-bold text-white">
        Roboto Slab Text
      </Text>
      <Text className="font-roboto-condensed-bold text-white">
        Roboto Condensed Text
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
