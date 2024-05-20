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
        <View className="flex justify-between w-full px-4 pb-2">
            <Pressable onPress={() => router.replace("")}>
                <Text className="pb-2 text-2xl font-black font-chakra-bold">
                    Pokedex
                </Text>
            </Pressable>
            <View className="flex flex-row gap-2">
                <Pressable onPress={() => router.replace("")}>
                    <View className={isOpenTab(1)}>
                        <Text className="px-5 py-1 text-white font-chakra-bold ">
                            All
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => router.replace("favorites")}>
                    <View className={isOpenTab(2)}>
                        <Text className="px-5 py-1 text-white font-chakra-bold ">
                            Favorites
                        </Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}
