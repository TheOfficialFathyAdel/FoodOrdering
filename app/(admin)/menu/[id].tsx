import { Button, Image, Pressable, Text, View } from "react-native";
import tw from "twrnc";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import products from "@/assets/data/products";
import { useState } from "react";
import { PizzaSize, Product } from "@/types/types";
import { useCart } from "@/providers/CartProvider";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

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
      <Text style={tw`text-3xl font-bold mb-2 text-[${Colors.light.tint}]`}>
        {product?.name}
      </Text>
      <Text style={tw`text-2xl font-bold `}>Price: {product?.price}$</Text>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Pressable
              onPress={() => router.push(`/(admin)/menu/create?id=${id}`)}
            >
              {({ pressed }) => (
                <FontAwesome
                  name="pencil"
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
    </View>
  );
}
