import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { container } from "@/constants/Container";

export default function index() {
  return <SafeAreaProvider style={container.root}></SafeAreaProvider>;
}

const styles = StyleSheet.create({});
