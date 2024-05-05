import Logo from "@/components/Logo";
import { container } from "@/constants/Container";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginPage() {
  return (
    <SafeAreaView className="bg-background h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Logo />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
