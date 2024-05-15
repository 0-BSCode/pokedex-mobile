import { router } from "expo-router";
import { View, Pressable, Image, Text } from "react-native";

export default function DetailsHeader() {
    return (
        <View className="flex flex-row justify-between px-4 pb-4">
            <Pressable onPress={() => router.replace("/")}>
                <Text className="px-2 py-1 text-xl text-white rounded-md font-chakra-bold bg-white/50">
                    Back
                </Text>
            </Pressable>
            <Pressable>
                <Text className="px-2 py-1 text-xl text-white rounded-md font-chakra-bold bg-white/50">
                    Add to Favorites
                </Text>
            </Pressable>
        </View>
    );
}
