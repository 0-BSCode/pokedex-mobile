import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ReactElement } from "react";
import { Modal as ExpoModal, View, Text, Pressable } from "react-native";

interface ModalProps {
    title: string;
    isVisible: boolean;
    children: ReactElement;
    onClose: () => void;
}

const Modal = ({ title, isVisible, children, onClose }: ModalProps) => {
    return (
        <ExpoModal animationType="slide" transparent={true} visible={isVisible}>
            <View className="h-2/4 w-full bg-gray-800 rounded-t-lg absolute bottom-0">
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
        </ExpoModal>
    );
};

export default Modal;
