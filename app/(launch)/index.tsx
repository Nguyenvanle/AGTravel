import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import Logo from "@/components/Logo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";
import { container } from "@/constants/Container";
import { BeigeButton, BrownButton, ButtonCustom } from "@/components/Button";
import { text } from "@/constants/Text";

export default function Launch() {
  const alertHandler = () =>
    Alert.alert("Thông Báo", "Bạn đã đăng nhập thành công 🥰", [
      {
        text: "Ok",
        onPress: () => {
          console.log("(launch) redirect to (home)");
          router.push("/(tabs)/(home)");
        },
      },
    ]);

  return (
    <SafeAreaProvider style={launch.container}>
      <Logo />
      <View>
        <Text style={text.title}>Sống và Trải Nghiệm</Text>
        <Text style={text.body}>Hãy để chúng tôi đồng hành cùng bạn</Text>
        <Text style={launch.text}>Khám Phá An Giang</Text>
      </View>
      <View style={container.button}>
        <BrownButton label={"Đăng nhập"} alert={alertHandler} />
        <BeigeButton label={"Đăng Ký"} alert={alertHandler} />
      </View>
    </SafeAreaProvider>
  );
}

const launch = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 20,
    alignSelf: "stretch",
  },
  text: {
    ...text.title,
    color: Colors.primary,
  },
});
