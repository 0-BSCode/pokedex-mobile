import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";

interface HeaderProps {
    openTab: number;
}

export default function Header({ openTab }: HeaderProps) {
    const isOpenTab = (tabNum: number) =>
        openTab === tabNum
            ? "flex items-center justify-center bg-black/60 rounded-3xl"
            : "flex items-center justify-center bg-black/40 rounded-3xl";

    return (
        <View className="flex justify-between w-full px-4 py-5 bg-red-800">
            <Pressable onPress={() => router.replace("")}>
                <Text className="text-3xl font-black text-white font-chakra-bold">
                    Pokedex
                </Text>
            </Pressable>
        </View>
    );
}
