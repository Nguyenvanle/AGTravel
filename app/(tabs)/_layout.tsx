import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function TabLayout() {
  const iconSize = 26;

  return (
    <Tabs
      screenOptions={{
        // Tab Bar Style
        tabBarActiveTintColor: Colors.dark.black,
        tabBarInactiveTintColor: Colors.light.milk,
        tabBarStyle: tab.tabBarStyle,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        // Header Style
        headerShown: true,
        headerStyle: tab.headerStyle,
        headerTitleAlign: "center",
        headerTitleStyle: tab.headerTitle,
      }}
    >
      {/* Home Screen */}
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign size={iconSize} name="home" color={color} />
          ),
        }}
      />

      {/* Destinations Screen */}
      <Tabs.Screen
        name="(destinations)"
        options={{
          title: "Destinations",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="map-marker-radius-outline"
              size={iconSize}
              color={color}
            />
          ),
        }}
      />

      {/* Booking Screen */}
      <Tabs.Screen
        name="(booking)"
        options={{
          title: "Booking",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ticket-outline" size={iconSize} color={color} />
          ),
        }}
      />

      {/* FAQ Screen */}
      <Tabs.Screen
        name="(faq)"
        options={{
          title: "FAQ",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbox-outline" size={iconSize} color={color} />
          ),
        }}
      />

      {/* Account Screen */}
      <Tabs.Screen
        name="(account)"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={iconSize} color={color} />
          ),
        }}
      />

      {/* Tab Index Screen */}
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          href: null,
        }}
      />
    </Tabs>
  );
}

const tab = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    height: 70,
    paddingHorizontal: 30,
    paddingBottom: 10,
    backgroundColor: Colors.background,
    borderTopWidth: 0, // Tắt đường viền dưới cùng
    shadowColor: "transparent", // Tắt bóng (shadow) trên iOS
    elevation: 0, // Tắt bóng (shadow) trên Android
  },
  headerStyle: {
    borderBottomWidth: 0, // Tắt đường viền trên cùng
    shadowColor: "transparent", // Tắt bóng (shadow) trên iOS
    elevation: 0, // Tắt bóng (shadow) trên Android
    backgroundColor: Colors.background,
  },
  headerTitle: {
    color: Colors.light.white,
  },
});
