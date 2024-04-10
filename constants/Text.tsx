import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const text = StyleSheet.create({
  normal: {
    fontSize: 16,
    color: Colors.white,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 25,
    paddingRight: 25,
    fontStyle: "normal",
    fontWeight: "700",
  },
  normalNoPadding: {
    fontSize: 16,
    color: Colors.white,
    fontStyle: "normal",
  },
  header: {
    fontSize: 24,
    color: Colors.white,
    fontWeight: "700",
  },
  headerPrimary: {
    fontSize: 24,
    color: Colors.primary,
    fontWeight: "700",
  },
  label: {
    fontSize: 20,
    color: Colors.light.milk,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22,
    textTransform: "capitalize",
  },
  success: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontStyle: "normal",
    color: Colors.success,
  },
  headerFilter: {
    fontSize: 25,
    color: Colors.white,
    fontWeight: "700",
  },
  select: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    color: Colors.white,
  },
});

export const description = StyleSheet.create({
  default: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    height: 24,
  },
  bold: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  primary: {
    textAlign: "center",
    color: Colors.primary,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  headline: {
    color: Colors.success,
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "700",
    minHeight: 32,
  },
});
