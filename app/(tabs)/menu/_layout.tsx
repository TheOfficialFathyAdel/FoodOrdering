import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";

export default function MenuStack() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Link href="/cart" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="shopping-cart"
                  size={25}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}
    />
  );
}
