import { FontAwesome5 } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import useFilterStore from "../../stores/filterStore";
import Form from "../Form";
import Modal from "../Modal";

export default function Header() {
    const filterStore = useFilterStore();
    const currentRoute = usePathname();

    const isOnIndex = currentRoute === "/";

    return (
        <View className="flex flex-row items-center justify-between w-full px-4 py-5 bg-red-800">
            <Modal
                title={"Filters"}
                isVisible={filterStore.isVisible}
                onClose={() => filterStore.setIsVisible(false)}
                children={<Form />}
            />
            <Pressable onPress={() => router.replace("")}>
                <Text className="text-3xl font-black text-white font-chakra-bold">
                    Pokedex
                </Text>
            </Pressable>
            {!isOnIndex && (
                <TouchableOpacity
                    onPress={() => {
                        filterStore.setIsVisible(true);
                    }}
                >
                    <FontAwesome5 name="filter" size={24} color="white" />
                </TouchableOpacity>
            )}
        </View>
    );
}
