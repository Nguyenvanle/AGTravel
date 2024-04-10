import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageViewer from "./ImageViewer";

const PlaceholderImage = require("@/assets/images/logo.png");

export default function Logo() {
  return (
    <View style={logo.container}>
      <ImageViewer placeholderImageSource={PlaceholderImage}></ImageViewer>
    </View>
  );
}

const logo = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
