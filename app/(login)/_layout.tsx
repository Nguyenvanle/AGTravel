import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function LoginLayout() {
  return (
    <Stack
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: true,
        headerStyle: login.headerStyle,
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerTitleStyle: login.headerTitle,
      }}
    >
      <Stack.Screen
        name="LoginScreen"
        options={{ headerShown: true, title: "Đăng Nhập" }}
      />
      <Stack.Screen name="(signup)" options={{ headerShown: false }} />
      <Stack.Screen name="(reset)" options={{ headerShown: false }} />
      <Stack.Screen name="(forgot)" options={{ headerShown: false }} />
    </Stack>
  );
}

const login = StyleSheet.create({
  headerStyle: {
    borderBottomWidth: 0, // Tắt đường viền dưới cùng
    shadowColor: "transparent", // Tắt bóng (shadow) trên iOS
    elevation: 0, // Tắt bóng (shadow) trên Android
    backgroundColor: Colors.background,
  },
  headerTitle: {
    color: Colors.dark.black,
    fontWeight: "600",
    fontSize: 34,
  },
});
