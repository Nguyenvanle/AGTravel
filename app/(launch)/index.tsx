import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import Logo from "@/components/Logo";
import Button from "@/components/Button";

export default function Launch() {
  return (
    <View style={launch.container}>
      <Logo></Logo>
      <Button label={"Đăng nhập"}></Button>
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
    gap: 10,
    alignSelf: "stretch",
  },
});
