import { Image, Text, Pressable } from "react-native";
import { Product } from "@/types/types";
import { Link } from "expo-router";
import tw from "twrnc";

type ProductListItemProps = {
  product: Product;
};
export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

export function ProductListItem({ product }: ProductListItemProps) {
  return (
    <Link href={`/menu/${product.id}` as any} asChild>
      <Pressable
        style={tw`items-center bg-white p-4 rounded-lg flex-1 max-w-[50%]`}
      >
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={tw`w-full aspect-square`}
          resizeMode="contain"
        />
        <Text style={tw`text-xl font-bold text-center`}>{product.name}</Text>
        <Text style={tw`text-xl font-bold text-[#2f95dc]`}>
          ${product.price}
        </Text>
      </Pressable>
    </Link>
  );
}
