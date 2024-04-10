import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const text = StyleSheet.create({
  label: {
    fontSize: 20,
    color: Colors.light.milk,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22,
    textTransform: "capitalize",
  },
  title: {
    fontSize: 24,
    color: Colors.light.white,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "center",
  },
  body: {
    fontSize: 18,
    color: Colors.light.white,
    fontStyle: "normal",
    fontWeight: "300",
    textAlign: "center",
  },
});
