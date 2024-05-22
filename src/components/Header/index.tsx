import { router, usePathname } from "expo-router";
import { View, Text, Pressable } from "react-native";

import useFilterStore from "../../stores/filterStore";
import Button from "../Button";
import Form from "../Form";
import Modal from "../Modal";

export default function Header() {
    const filterStore = useFilterStore();
    const currentRoute = usePathname();

    const isOnIndex = currentRoute === "/";

    return (
        <View className="flex flex-row justify-between w-full px-4 py-5 bg-red-800">
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
                <Button
                    isDisabled={false}
                    onPress={() => {
                        filterStore.setIsVisible(true);
                    }}
                    title="Open modal"
                    textClasses="font-chakra"
                    containerClasses="border-blue-300 border-2 p-1"
                />
            )}
        </View>
    );
}
