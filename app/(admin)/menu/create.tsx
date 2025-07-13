import { View, Text, TextInput, Pressable, Image } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Stack } from "expo-router";
import Colors from "@/constants/Colors";
import { defaultPizzaImage } from "@/components/ProductListItem";
import * as ImagePicker from "expo-image-picker";

export default function CreateProductScreen() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState(defaultPizzaImage);
  const resetFields = () => {
    setName("");
    setPrice("");
  };
  const validateInput = () => {
    if (!name.trim()) {
      setError("Product name is required.");
      return false;
    }
    if (isNaN(Number(price)) || Number(price) <= 0) {
      setError("Price must be a valid number.");
      return false;
    }
    return true;
  };
  const onCreate = () => {
    if (!validateInput()) {
      return;
    }
    setError("");
    console.log({ name, price });
    resetFields();
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={tw`p-5 justify-center flex-1`}>
      <Image
        style={tw`w-[25%] h-[25%] aspect-square rounded-full self-center mb-5`}
        source={{ uri: image }}
      />
      <Text
        style={tw`self-center text-2xl mb-10 font-bold text-[${Colors.light.tint}]`}
        onPress={pickImage}
      >
        Select Image
      </Text>
      <Text style={tw`text-xl font-medium text-gray-600`}>Product Name</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={tw`bg-white p-4 rounded-lg mt-1 mb-5 text-lg`}
      />
      <Text style={tw`text-xl font-medium text-gray-600`}>Price ($)</Text>
      <TextInput
        placeholder="9.99$"
        value={price}
        onChangeText={setPrice}
        style={tw`bg-white p-4 rounded-lg mt-1 mb-5 text-lg`}
        keyboardType="numeric"
      />
      {error && <Text style={tw`text-red-400 text-lg mb-2`}>{error}</Text>}
      <Pressable
        style={tw`bg-[#2f95dc] h-18 items-center justify-center rounded-full mb-4 opacity-${
          !name || !price ? 60 : 100
        }`}
        onPress={onCreate}
        disabled={!name || !price}
      >
        <Text style={tw`text-xl font-bold text-white`}>Create</Text>
      </Pressable>
      <Stack.Screen
        options={{
          title: "Create Product",
          headerTitleAlign: "center",
          headerRight: () => null,
        }}
      />
    </View>
  );
}
