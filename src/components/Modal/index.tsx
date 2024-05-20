import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ReactElement } from "react";
import {
    Modal as ExpoModal,
    View,
    Text,
    Pressable,
    StyleSheet
} from "react-native";

interface ModalProps {
    title: string;
    isVisible: boolean;
    children: ReactElement;
    onClose: () => void;
}

const Modal = ({ title, isVisible, children, onClose }: ModalProps) => {
    return (
        <ExpoModal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
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

// TODO: Replace with nativewind
const styles = StyleSheet.create({
    modalContent: {
        height: "50%",
        width: "100%",
        backgroundColor: "#25292e",
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: "absolute",
        bottom: 0
    },
    titleContainer: {
        height: "16%",
        backgroundColor: "#464C55",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    title: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Chakra-Regular"
    },
    pickerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 50,
        paddingVertical: 20
    }
});