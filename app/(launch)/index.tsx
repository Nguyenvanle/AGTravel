import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import Logo from "@/components/Logo";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useSegments } from "expo-router";
import { container } from "@/constants/Container";
import { BeigeButton, BrownButton, ButtonCustom } from "@/components/Button";
import { text } from "@/constants/Text";

export default function Launch() {
  // Hàm xác định trang hiện tại từ đó chuyển hướng tới trang tiếp theo dựa trên trang hiện tại
  const [currentSegments] = useSegments();

  const loginHandler = () => {
    console.log(`${currentSegments} --> (login)`);
    router.push(`/(login)/LoginScreen`);
  };

  const signUpHandler = () => {
    console.log(`${currentSegments} --> (onboarding)`);
    router.push(`/(onboarding)`);
  };

  return (
    <View style={launch.container}>
      <Logo />
      <View>
        <Text style={text.title} className="font-roboto-medium">
          Sống và Trải Nghiệm
        </Text>
        <Text style={text.body} className="font-roboto">
          Hãy để chúng tôi đồng hành cùng bạn
        </Text>
        <Text style={launch.text} className="font-roboto-slab-semi-bold">
          Khám Phá An Giang
        </Text>
      </View>
      <View style={container.button}>
        <BrownButton label={"Đăng nhập"} onPress={loginHandler} />
        <BeigeButton label={"Đăng Ký"} onPress={signUpHandler} />
      </View>
    </View>
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
