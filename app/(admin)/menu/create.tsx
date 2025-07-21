//explicit files imports
import { useState } from "react";
import { defaultPizzaImage } from "@/components/ProductListItem";
import { View, Text, TextInput, Pressable, Image, Alert } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

//Default files imports
import * as ImagePicker from "expo-image-picker";
import Colors from "@/constants/Colors";
import tw, { create } from "twrnc";
import DeleteAlertModal from "@/components/DeleteAlertModal";
import { useRoute } from "@react-navigation/native";

export default function CreateProductScreen() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState(defaultPizzaImage);
  const [modalVisible, setModalVisible] = useState(false);
  const { id } = useLocalSearchParams();
  const isUpdating = !!id;
  const router = useRouter();

  // Function to reset the input fields
  const resetFields = () => {
    setName("");
    setPrice("");
  };

  // Function to validate the input fields
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

  const onSubmit = () => {
    if (isUpdating) {
      onUpdate();
    } else {
      onCreate();
    }
  };

  // Function to handle the creation of a new product
  const onCreate = () => {
    if (!validateInput()) {
      return;
    }
    setError("");
    console.log("Creating Product");
    resetFields();
    router.push("/(admin)/menu");
  };

  const onUpdate = () => {
    if (!validateInput()) {
      return;
    }
    setError("");
    console.log("Updating Product");
    resetFields();
    router.push("/(admin)/menu");
  };

  const onDelete = () => {
    console.log("Deleting Product");
    router.push("/(admin)/menu");
  };

  const confirmDelete = () => {
    setModalVisible(true);
  };
  // Function to pick an image from the device's library
  const pickImage = async () => {
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
      <DeleteAlertModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onDelete={() => {
          setModalVisible(false);
          onDelete(); // your delete logic
        }}
      />
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
        onPress={onSubmit}
        disabled={!name || !price}
      >
        <Text style={tw`text-xl font-bold text-white`}>
          {isUpdating ? "Update" : "Create"}
        </Text>
      </Pressable>

      {isUpdating && (
        <Pressable
          style={tw`bg-red-600 h-18 items-center justify-center rounded-full mb-4`}
          onPress={confirmDelete}
        >
          <Text style={tw`text-xl font-bold text-white`}>Delete</Text>
        </Pressable>
      )}
      <Stack.Screen
        options={{
          title: `${isUpdating ? "Update Product" : "Create Product"}`,
          headerTitleAlign: "center",
          headerRight: () => null,
        }}
      />
    </View>
  );
}
