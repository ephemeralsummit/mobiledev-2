import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2563eb",
        tabBarInactiveTintColor: isDarkMode ? "#9ca3af" : "#6b7280",
        tabBarStyle: {
          backgroundColor: isDarkMode ? "#121212" : "#ffffff",
          borderTopColor: isDarkMode ? "#27272a" : "#e5e7eb",
        },
        headerStyle: {
          backgroundColor: isDarkMode ? "#121212" : "#ffffff",
        },
        headerTintColor: isDarkMode ? "#ffffff" : "#000000",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Hello World",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="form"
        options={{
          title: "Form Input",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "create" : "create-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
