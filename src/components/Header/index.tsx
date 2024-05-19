import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function Header() {
    return (
        <View className="flex flex-row justify-between w-full px-6">
            <Pressable onPress={() => router.replace("")}>
                <Text className="text-2xl font-black text-center font-chakra">
                    Pokedex
                </Text>
            </Pressable>

            <Pressable onPress={() => router.replace("favorites")}>
                <Text className="text-2xl font-black text-center font-chakra">
                    Favorites
                </Text>
            </Pressable>
        </View>
    );
}
