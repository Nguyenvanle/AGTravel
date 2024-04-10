import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";
import { text } from "./text";

export const button = StyleSheet.create({
  primary: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: Colors.primary,
    flexDirection: "row",
  },
  primaryApply: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  success: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: Colors.success,
    flexDirection: "row",
  },
  light: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: Colors.white,
    flexDirection: "row",
  },
  textPrimary: {
    ...text.normal,
    color: Colors.white,
  },
  textLight: {
    ...text.normal,
    color: Colors.gray,
  },
  ChooseFilter: {},
});
