import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { container } from "@/constants/Container";
import Logo from "@/components/Logo";
import Colors from "@/constants/Colors";
import { Redirect } from "expo-router";

export default function Page() {
  return <Redirect href="/(launch)"></Redirect>;
}
