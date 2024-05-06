import { useLocalSearchParams } from "expo-router";
import { View, Image, Text, StyleSheet } from "react-native";

export default function DetailsPage() {
    const { id } = useLocalSearchParams();

    return (
        <View className="flex-1 px-4 py-8 bg-white">
            <View className="flex flex-row items-center justify-between mb-8">
                <Text className="text-2xl font-bold">Bulbasaur</Text>
                <Text className="text-lg text-gray-500">#001</Text>
            </View>
            <View className="flex flex-row">
                {/* <Image
                    source={require("./bulbasaur.png")}
                    className="w-24 h-24 mr-4"
                /> */}
                <View className="flex-1">
                    <Text className="mb-2 text-base">Species: Seed</Text>
                    <Text className="mb-2 text-base">
                        Height: 23.6" (0.70 cm)
                    </Text>
                    <Text className="mb-2 text-base">
                        Weight: 15.2 lbs (6.9 kg)
                    </Text>
                    <Text className="mb-2 text-base">
                        Abilities: Overgrow, Chlorophyll
                    </Text>
                    <Text className="mb-2 text-base">
                        Breeding: Gender Ratio 87.5% ♂ - 12.5% ♀
                    </Text>
                    <Text className="mb-2 text-base">Egg Groups: Monster</Text>
                    <Text className="mb-2 text-base">Egg Cycle: Grass</Text>
                </View>
            </View>
            <View className="flex flex-row justify-between mt-8">
                <Text className="px-4 py-2 text-base bg-gray-200 rounded-md">
                    Grass
                </Text>
                <Text className="px-4 py-2 text-base bg-purple-200 rounded-md">
                    Poison
                </Text>
            </View>
            <View className="mt-8">
                <Text className="mb-4 text-lg font-bold">Base Stats</Text>
                {/* Add stat blocks here */}
            </View>
        </View>
    );
}
