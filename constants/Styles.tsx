import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
  block: {
    backgroundColor: Colors.background,
    borderRadius: 10,
    marginHorizontal: 14,
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  // == Dai phan cach == //
  separator: {
    height: 2,
    backgroundColor: Colors.dark.black,
    paddingTop: 0,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  avatar: {
    flexShrink: 0,
    width: 30,
    height: 30,
  },
  namePosition: {
    flex: 0,
    alignItems: "flex-start",
    gap: 8,
  },
  textPrimary: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 22,
    color: Colors.primary,
  },
});

export const input = StyleSheet.create({
  normal: {
    height: 50,
    padding: 10,
    backgroundColor: Colors.light.white,
    width: "100%",
    borderRadius: 10,
    gap: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
});
