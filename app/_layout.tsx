import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Roboto-Black": require("../assets/fonts/Roboto/Roboto-Black.ttf"),
    "Roboto-BlackItalic": require("../assets/fonts/Roboto/Roboto-BlackItalic.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-BoldItalic": require("../assets/fonts/Roboto/Roboto-BoldItalic.ttf"),
    "Roboto-Italic": require("../assets/fonts/Roboto/Roboto-Italic.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto/Roboto-Light.ttf"),
    "Roboto-LightItalic": require("../assets/fonts/Roboto/Roboto-LightItalic.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("../assets/fonts/Roboto/Roboto-MediumItalic.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Thin": require("../assets/fonts/Roboto/Roboto-Thin.ttf"),
    "Roboto-ThinItalic": require("../assets/fonts/Roboto/Roboto-ThinItalic.ttf"),

    "RobotoSlab-Black": require("../assets/fonts/Roboto_Slab/static/RobotoSlab-Black.ttf"),
    "RobotoSlab-Bold": require("../assets/fonts/Roboto_Slab/static/RobotoSlab-Bold.ttf"),
    "RobotoSlab-ExtraBold": require("../assets/fonts/Roboto_Slab/static/RobotoSlab-ExtraBold.ttf"),
    "RobotoSlab-ExtraLight": require("../assets/fonts/Roboto_Slab/static/RobotoSlab-ExtraLight.ttf"),
    "RobotoSlab-Light": require("../assets/fonts/Roboto_Slab/static/RobotoSlab-Light.ttf"),
    "RobotoSlab-Medium": require("../assets/fonts/Roboto_Slab/static/RobotoSlab-Medium.ttf"),
    "RobotoSlab-Regular": require("../assets/fonts/Roboto_Slab/static/RobotoSlab-Regular.ttf"),
    "RobotoSlab-SemiBold": require("../assets/fonts/Roboto_Slab/static/RobotoSlab-SemiBold.ttf"),
    "RobotoSlab-Thin": require("../assets/fonts/Roboto_Slab/static/RobotoSlab-Thin.ttf"),

    "RobotoCondensed-Black": require("../assets/fonts/Roboto_Condensed/static/RobotoCondensed-Black.ttf"),
    "RobotoCondensed-BlackItalic": require("../assets/fonts/Roboto_Condensed/static/RobotoCondensed-BlackItalic.ttf"),
    "RobotoCondensed-Bold": require("../assets/fonts/Roboto_Condensed/static/RobotoCondensed-Bold.ttf"),
    "RobotoCondensed-BoldItalic": require("../assets/fonts/Roboto_Condensed/static/RobotoCondensed-BoldItalic.ttf"),
    "RobotoCondensed-ExtraLight": require("../assets/fonts/Roboto_Condensed/static/RobotoCondensed-ExtraLight.ttf"),
    "RobotoCondensed-ExtraLightItalic": require("../assets/fonts/Roboto_Condensed/static/RobotoCondensed-ExtraLightItalic.ttf"),
    "RobotoCondensed-Light": require("../assets/fonts/Roboto_Condensed/static/RobotoCondensed-Light.ttf"),
    "RobotoCondensed-LightItalic": require("../assets/fonts/Roboto_Condensed/static/RobotoCondensed-LightItalic.ttf"),
    "RobotoCondensed-Medium": require("../assets/fonts/Roboto_Condensed/static/RobotoCondensed-Medium.ttf"),
    "RobotoCondensed-MediumItalic": require("../assets/fonts/Roboto_Condensed/static/RobotoCondensed-MediumItalic.ttf"),
    "RobotoCondensed-Regular": require("../assets/fonts/Roboto_Condensed/static/RobotoCondensed-Regular.ttf"),
    "RobotoCondensed-SemiBold": require("../assets/fonts/Roboto_Condensed/static/RobotoCondensed-SemiBold.ttf"),
    "RobotoCondensed-SemiBoldItalic": require("../assets/fonts/Roboto_Condensed/static/RobotoCondensed-SemiBoldItalic.ttf"),
    "RobotoCondensed-Thin": require("../assets/fonts/Roboto_Condensed/static/RobotoCondensed-Thin.ttf"),
    "RobotoCondensed-ThinItalic": require("../assets/fonts/Roboto_Condensed/static/RobotoCondensed-ThinItalic.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(launch)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
