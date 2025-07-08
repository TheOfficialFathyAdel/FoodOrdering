import { Button, Image, Pressable, Text, View } from "react-native";
import tw from "twrnc";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import products from "@/assets/data/products";
import { useState } from "react";
import { PizzaSize, Product } from "@/types/types";
import { useCart } from "@/providers/CartProvider";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");
  const product = products.find((p) => p.id.toString() == id);
  const router = useRouter();
  const { addItem } = useCart();
  const addToCart = () => {
    if (!product) {
      return null;
    }
    addItem(product as Product, selectedSize);
    router.push("/cart");
  };
  return (
    <View style={tw`bg-white flex-1 p-2`}>
      <Stack.Screen
        options={{ title: product?.name, headerTitleAlign: "center" }}
      />
      <Image
        source={{ uri: product?.image }}
        style={tw`w-full aspect-square`}
        resizeMode="contain"
      />
      <Text style={tw`text-xl font-bold text-[#aaa] `}>Select Size</Text>
      <View style={tw`flex-row justify-around my-2`}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            key={size}
            style={tw`${
              selectedSize == size ? "bg-[#DCDCDC]" : ""
            } w-15 aspect-square rounded-full justify-center items-center`}
          >
            <Text
              style={tw`text-2xl font-bold text-center ${
                selectedSize == size ? "text-black" : "text-[#aaa]"
              } `}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={tw`text-2xl font-bold mt-auto mb-2`}>
        Price: {product?.price}$
      </Text>
      <Pressable
        onPress={addToCart}
        style={tw`bg-[#2f95dc] h-18 items-center justify-center rounded-full mb-4 `}
      >
        <Text style={tw`text-xl font-bold text-white`}>Add to cart</Text>
      </Pressable>
    </View>
  );
}
