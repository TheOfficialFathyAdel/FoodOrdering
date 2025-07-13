import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import tw from "twrnc";

export default function Index() {
  return (
    <View style={tw`flex-1 justify-center `}>
      <Link asChild href={"/(user)/menu"}>
        <Pressable
          style={tw`bg-[#2f95dc] h-18 items-center justify-center rounded-full mb-4 `}
        >
          <Text style={tw`text-xl font-bold text-white`}>User</Text>
        </Pressable>
      </Link>
      <Link href={"/(admin)/menu"} asChild>
        <Pressable
          style={tw`bg-[#2f95dc] h-18 items-center justify-center rounded-full mb-4`}
        >
          <Text style={tw`text-xl font-bold text-white`}>Admin</Text>
        </Pressable>
      </Link>
    </View>
  );
}
