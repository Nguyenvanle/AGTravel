import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const container = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 80,
    gap: 10,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
