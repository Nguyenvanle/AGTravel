import Logo from "@/components/Logo";
import { container } from "@/constants/Container";
import { View, Text, ScrollView } from "react-native";

export default function ForgotPage() {
  return (
    <ScrollView style={container.scrollView}>
      <View style={container.root}>
        <Logo />
        <Text className="text-primary text-xl font-roboto-bold capitalize leading-snug ">
          Chức năng đang phát triển
        </Text>
      </View>
    </ScrollView>
  );
}
