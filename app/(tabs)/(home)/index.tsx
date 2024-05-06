import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { container } from "@/constants/Container";
import { Text } from "react-native";
import { text } from "@/constants/Text";
import { Feather } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function index() {
  return (
    <ScrollView style={container.scrollView}>
      <View style={container.root}>
        <View style={home.offerContainer}>
          <View style={home.topContainer}>
            <View style={home.welcomeContainer}>
              <Text style={homeText.title}>Hi, Welcome Back</Text>
              <Text style={text.body}>Hôm nay chúng ta có gì nào?</Text>
            </View>
            <View style={home.searchIconContainer}>
              <TouchableOpacity>
                <Feather name="search" size={34} color={Colors.light.milk} />
              </TouchableOpacity>
            </View>
          </View>
          {/* <Text style={text.label}>Mid</Text> */}
          {/* <Text style={text.label}>Bot</Text> */}
        </View>
      </View>
    </ScrollView>
  );
}

export const home = StyleSheet.create({
  offerContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  topContainer: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between",
  },
  welcomeContainer: {
    flex: 0,
    alignItems: "flex-start",
    textAlign: "left",
  },
  searchIconContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    height: 31,
    width: 31,
  },
});

export const homeText = StyleSheet.create({
  title: {
    ...text.title,
    color: Colors.primary,
  },
});
