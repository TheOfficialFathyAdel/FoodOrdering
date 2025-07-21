import { Pressable, Text, View } from "react-native";
import tw from "twrnc";

import { OrderItem } from "@/types/types";
import { Image } from "react-native";
import { defaultPizzaImage } from "./ProductListItem";

interface OrderItemListItemProp {
  item: OrderItem;
}

export default function OrderItemListItem({ item }: OrderItemListItemProp) {
  return (
    <Pressable style={tw`bg-white flex-row items-center p-4 rounded-lg mt-4`}>
      <View style={tw`flex-row items-center gap-4`}>
        <View>
          <Image
            style={tw`w-20 h-20 aspect-square`}
            source={{ uri: item.products.image || defaultPizzaImage }}
            resizeMode="contain"
          />
        </View>
        <View>
          <View>
            <Text style={tw`text-xl font-bold`}>{item.products.name}</Text>
          </View>
          <View style={tw`flex-row gap-3`}>
            <Text style={tw`text-lg font-medium`}>{item.products.price}$</Text>
            <Text style={tw`text-lg font-medium`}>Size : {item.size}</Text>
          </View>
        </View>
      </View>
      <View style={tw`ml-auto`}>
        <Text style={tw`font-bold text-xl`}>{item.quantity}</Text>
      </View>
    </Pressable>
  );
}
