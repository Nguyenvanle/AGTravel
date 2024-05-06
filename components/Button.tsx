import Colors from "@/constants/Colors";
import { text } from "@/constants/Text";
import { Button } from "@rneui/themed";
import { StyleSheet, View, Text, Alert } from "react-native";

export function ButtonCustom({ label, onPress, buttonColor, textColor }: any) {
  const button = StyleSheet.create({
    button: {
      flex: 0,
      backgroundColor: buttonColor,
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
      borderRadius: 20,
      color: textColor,
      fontFamily: "Roboto-Medium",
    },
  });

  return (
    <Button
      buttonStyle={button.button}
      onPress={onPress}
      title={label}
      loading={false}
      loadingProps={{ size: "small", color: "white" }}
      titleStyle={button.buttonLabel}
    ></Button>
  );
}

export function BrownButton({ label, onPress }: any) {
  return (
    <ButtonCustom
      label={label}
      onPress={onPress}
      buttonColor={Colors.dark.brown}
      textColor={Colors.light.milk}
    />
  );
}

export function BeigeButton({ label, onPress }: any) {
  return (
    <ButtonCustom
      label={label}
      onPress={onPress}
      buttonColor={Colors.light.beige}
      textColor={Colors.light.milk}
    />
  );
}
