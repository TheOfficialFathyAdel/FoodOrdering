import Colors from "@/constants/Colors";
import { Modal, View, Text, Pressable } from "react-native";
import tw from "twrnc";

interface DeleteAlertModalProps {
  visible: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteAlertModal({
  visible,
  onClose,
  onDelete,
}: DeleteAlertModalProps) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View
        style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
      >
        <View style={tw`bg-white p-5 rounded-lg w-[80%] shadow-lg `}>
          <Text style={tw`text-5 font-bold mb-4 self-center`}>
            Delete Product
          </Text>
          <Text style={tw`text-lg mb-4 text-center`}>
            Are you sure you want to delete this product?
          </Text>
          <View style={tw`flex-row justify-center`}>
            <Pressable
              onPress={onClose}
              style={tw`mr-4 bg-blue-500 px-4 py-2 rounded w-[40%] rounded-full`}
            >
              <Text style={tw`text-white font-bold text-lg self-center`}>
                Cancel
              </Text>
            </Pressable>
            <Pressable
              onPress={onDelete}
              style={tw`mr-4 bg-red-500 px-4 py-2 rounded w-[40%] rounded-full`}
            >
              <Text
                style={tw` text-red-400 font-bold text-white text-lg self-center`}
              >
                Delete
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
