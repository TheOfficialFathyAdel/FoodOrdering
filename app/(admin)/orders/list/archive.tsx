import orders from "@/assets/data/orders";
import OrderListItem from "@/components/OrderListItem";
import { Stack } from "expo-router";
import { View, FlatList } from "react-native";

export default function Archive() {
  return (
    <View>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      />
      <Stack.Screen
        options={{ title: "Archive", headerTitleAlign: "center" }}
      />
    </View>
  );
}
