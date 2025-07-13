import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  console.log("Admin layout loaded");

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.background,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarButton: (props) => (
          <Pressable
            onPress={props.onPress}
            style={props.style}
            android_ripple={{ color: "transparent" }}
          >
            {props.children}
          </Pressable>
        ),
        tabBarInactiveTintColor: "gainsboro",
        tabBarStyle: {
          backgroundColor: Colors.light.tint,
        },
      }}
    >
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="cutlery" color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 14, // ✅ Increase the font size here
            fontWeight: "bold", // optional, for clearer emphasis
          },
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Orders",
          tabBarLabelStyle: {
            fontSize: 14, // ✅ Increase the font size here
            fontWeight: "bold", // optional, for clearer emphasis
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
    </Tabs>
  );
}
