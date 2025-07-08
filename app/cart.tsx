import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import CartListItem from "@/components/CartListItem";
import { useCart } from "@/providers/CartProvider";
import tw from "twrnc";

export default function CartScreen() {
  const { items, total } = useCart();
  return (
    <View style={tw`mx-4 flex-1`}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem item={item} key={item.id} />}
      />
      <Text style={tw`mb-10 text-3xl font-bold`}>Total : {total}$</Text>
      <Pressable
        style={tw`bg-[#2f95dc] h-18 items-center justify-center rounded-full mb-20 mt-auto`}
      >
        <Text style={tw`text-xl font-bold text-white`}>Checkout</Text>
      </Pressable>
    </View>
  );
}
