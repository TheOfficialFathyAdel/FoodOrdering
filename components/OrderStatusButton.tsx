import Colors from "@/constants/Colors";
import { OrderStatus } from "@/types/types";
import { Pressable, Text, View } from "react-native";
import tw from "twrnc";

interface OrderStatusButtonProp {
  status: OrderStatus;
  selected: boolean;
}

export default function OrderStatusButton({
  status,
  selected,
}: OrderStatusButtonProp) {
  return (
    <Pressable
      style={tw`border ${selected ? `bg-[${Colors.light.tint}]` : ""} border-[${
        Colors.light.tint
      }] p-2 `}
    >
      <Text
        style={tw`text-[${
          selected ? "#fff" : Colors.light.tint
        }] text-lg font-bold text-center`}
      >
        {status}
      </Text>
    </Pressable>
  );
}
