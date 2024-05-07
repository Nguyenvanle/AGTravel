import { ScrollView, StyleSheet, View } from "react-native";
import { container } from "@/constants/Container";

export default function index() {
  return (
    <ScrollView style={container.scrollView}>
      <View style={container.root}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
