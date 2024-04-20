import { Stack } from "expo-router";

export default function LoginLayout() {
  return (
    <Stack initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" options={{ headerShown: false }} />
      <Stack.Screen name="(signup)" options={{ headerShown: false }} />
      <Stack.Screen name="(reset)" options={{ headerShown: false }} />
      <Stack.Screen name="(forgot)" options={{ headerShown: false }} />
    </Stack>
  );
}
