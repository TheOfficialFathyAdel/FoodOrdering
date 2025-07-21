import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

import tw from "twrnc";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <View style={tw`p-5 justify-center flex-1`}>
      <Text style={tw`text-xl font-medium text-gray-600`}>Email</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={tw`bg-white p-4 rounded-lg mt-1 mb-5 text-lg`}
      />
      <Text style={tw`text-xl font-medium text-gray-600`}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={tw`bg-white p-4 rounded-lg mt-1 mb-5 text-lg`}
        secureTextEntry
      />
      <Pressable
        style={tw`bg-[#2f95dc] h-18 items-center justify-center rounded-full  `}
      >
        <Text style={tw`text-xl font-bold text-white`}>Create an account</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/(auth)/sign-in")}>
        <Text style={tw`mt-5 font-bold self-center text-xl text-[#2f95dc]`}>
          Sign in
        </Text>
      </Pressable>
      <Stack.Screen
        options={{
          title: "Signup",
          headerBackVisible: false,
        }}
      />
    </View>
  );
}
