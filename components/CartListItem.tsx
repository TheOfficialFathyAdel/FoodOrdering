import { useCart } from "@/providers/CartProvider";
import { CartItem } from "@/types/types";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, Image, Pressable } from "react-native";
import tw from "twrnc";

type CartListItemProps = {
  item: CartItem;
};
export default function CartListItem({ item }: CartListItemProps) {
  const { updateQuantity } = useCart();
  if (!item) {
    return null; // Handle case where item is undefined
  }
  return (
    <View style={tw`bg-white p-4 flex-row rounded-lg  my-2 items-center`}>
      <View>
        <Image
          source={{ uri: item?.product.image || "" }}
          style={tw`w-20 h-20 rounded-lg`}
          resizeMode="contain"
        />
      </View>
      <View style={tw`ml-4 flex-1`}>
        <Text style={tw`font-bold text-xl`}>{item.product.name}</Text>
        <View style={tw`flex-row`}>
          <Text style={tw`font-bold text-[#2f95dc] text-[18px]`}>
            {item?.product.price}$
          </Text>
          <Text style={tw`font-bold text-black px-2 text-[18px]`}>
            Size : {item?.size}
          </Text>
        </View>
      </View>
      <View style={tw`flex-row ml-auto items-center`}>
        <FontAwesome
          name="minus"
          color={"gray"}
          onPress={() => updateQuantity(item.id, -1)}
        />
        <Text style={tw`font-bold text-2xl mx-2 text-gray-500`}>
          {item.quantity}
        </Text>
        <FontAwesome
          name="plus"
          color={"gray"}
          onPress={() => updateQuantity(item.id, 1)}
        />
      </View>
    </View>
  );
}
