import { header } from "@/constants/Styles";
import { Stack } from "expo-router";

export default function LoginLayout() {
  return (
    <Stack
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: true,
        headerStyle: header.style,
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerTitleStyle: header.title,
      }}
    >
      <Stack.Screen
        name="LoginScreen"
        options={{ headerShown: true, title: "Đăng Nhập" }}
      />
      <Stack.Screen
        name="(signup)"
        options={{ headerShown: true, title: "Đăng Ký" }}
      />
      <Stack.Screen name="(reset)" options={{ headerShown: false }} />
      <Stack.Screen name="(forgot)" options={{ headerShown: false }} />
    </Stack>
  );
}
