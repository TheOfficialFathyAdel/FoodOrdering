import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";

export default function MenuStack() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Pressable onPress={() => router.push("/(admin)/menu/create")}>
            {({ pressed }) => (
              <FontAwesome
                name="plus-square-o"
                color={Colors.light.tint}
                size={24}
                style={{
                  marginRight: 15,
                  opacity: pressed ? 0.5 : 1,
                }}
              />
            )}
          </Pressable>
        ),
      }}
    />
  );
}
