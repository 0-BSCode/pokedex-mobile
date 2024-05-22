import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function Header() {
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
