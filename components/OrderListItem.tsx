import { Pressable, Text, View } from "react-native";
import { Order } from "@/types/types";
import tw from "twrnc";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useLocalSearchParams, useRouter, useSegments } from "expo-router";

dayjs.extend(relativeTime);

interface OrderListItemProp {
  order: Order;
}

export default function OrderListItem({ order }: OrderListItemProp) {
  const router = useRouter();
  const segments = useSegments();

  return (
    <Pressable
      onPress={() => router.push(`/${segments[0]}/orders/${order.id}` as any)}
      style={tw`bg-white flex-row justify-between items-center p-5 rounded-lg`}
    >
      <View>
        <Text style={tw`font-bold text-xl`}>Order#{order.id}</Text>
        <Text style={tw`text-gray-500 font-bold text-lg`}>
          {dayjs(order.created_at).fromNow()}
        </Text>
      </View>
      <View>
        <Text style={tw`font-bold text-xl`}>{order.status}</Text>
      </View>
    </Pressable>
  );
}
