import Colors from "@/constants/Colors";
import { text } from "@/constants/Text";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Button({ label }: any) {
  return (
    <View style={button.buttonContainer}>
      <TouchableOpacity
        style={button.button}
        onPress={() => alert("You pressed a button.")}
      >
        <Text style={button.buttonLabel}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const button = StyleSheet.create({
  buttonContainer: {
    flex: 0,
    padding: 10,
    alignItems: "flex-start",
    gap: 20,
  },
  button: {
    flex: 0,
    backgroundColor: Colors.dark.brown,
    width: 220,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    ...text.label,
    flex: 0,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "stretch",
  },
});
