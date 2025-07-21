import orders from "@/assets/data/orders";
import OrderItemListItem from "@/components/OrderItemListItem";
import OrderListItem from "@/components/OrderListItem";
import OrderStatusButton from "@/components/OrderStatusButton";
import { OrderStatusList } from "@/types/types";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, FlatList, ScrollView } from "react-native";
import tw from "twrnc";

export default function OrderDetailsScreen() {
  const { id } = useLocalSearchParams();

  const order = orders.find((order) => order.id == Number(id));

  if (!order) {
    return <Text>Not found</Text>;
  }

  return (
    <View style={tw`p-4`}>
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => {
          return <OrderItemListItem item={item} />;
        }}
        ListHeaderComponent={() => <OrderListItem order={order} />}
        showsVerticalScrollIndicator={false}
      />
      <Text style={tw`my-4 text-xl font-bold`}>Status</Text>
      <View style={tw`flex-row gap-4`}>
        {OrderStatusList.map((status) => {
          return (
            <OrderStatusButton
              status={status}
              key={status}
              selected={order.status == status}
            />
          );
        })}
      </View>
      <Stack.Screen
        options={{ title: `Order #${id}`, headerTitleAlign: "center" }}
      />
    </View>
  );
}
