import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const container = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 80,
    paddingTop: 20,
    gap: 10,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
  scrollView: {
    backgroundColor: Colors.background,
    flex: 0,
  },
  button: {
    flex: 0,
    padding: 10,
    alignItems: "flex-start",
    gap: 20,
    borderRadius: 20,
  },
});
