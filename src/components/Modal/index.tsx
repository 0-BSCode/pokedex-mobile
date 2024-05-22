import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ReactElement } from "react";
import { View, Text, Pressable } from "react-native";
import ReactNativeModal from "react-native-modal";

interface ModalProps {
    title: string;
    isVisible: boolean;
    children: ReactElement;
    onClose: () => void;
}

const Modal = ({ title, isVisible, children, onClose }: ModalProps) => {
    return (
        <ReactNativeModal isVisible={isVisible}>
            <View className="h-fit w-full bg-gray-800 rounded-t-lg">
                <View className="h-[15%] bg-gray-600 rounded-t-lg px-5 flex flex-row justify-between items-center">
                    <Text className="text-white text-base font-chakra">
                        {title}
                    </Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" color="#fff" size={22} />
                    </Pressable>
                </View>
                {children}
            </View>
        </ReactNativeModal>
    );
};

export default Modal;
