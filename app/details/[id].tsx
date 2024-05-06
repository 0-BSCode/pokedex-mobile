import { useLocalSearchParams } from "expo-router";
import { View, Image, Text, StyleSheet } from "react-native";

import convertToTitleCase from "../../src/_utils/convertToTitleCase";
import usePokemonStore from "../../src/stores/pokemonStore";

export default function DetailsPage() {
    const { id } = useLocalSearchParams();
    const { pokemonList } = usePokemonStore();

    const viewedPokemon = pokemonList[Number(id) - 1];

    return (
        <View className="flex-1  py-8 bg-[#48d0b0]">
            <View className="px-5">
                <View className="flex flex-row items-center justify-between mb-4">
                    <Text className="text-3xl font-black text-white">
                        {convertToTitleCase(viewedPokemon.name)}
                    </Text>
                    <Text className="text-lg text-gray-500">#001</Text>
                </View>
                <View className="flex flex-row gap-2 ">
                    <View className="bg-white/50 rounded-3xl">
                        <Text className="px-6 py-2 font-bold text-white ">
                            Grass
                        </Text>
                    </View>

                    <View className="bg-white/50 rounded-3xl">
                        <Text className="px-6 py-2 font-bold text-white ">
                            Poison
                        </Text>
                    </View>
                </View>
                <View className="flex flex-row justify-center">
                    <Image
                        src={viewedPokemon.photoUrl}
                        className="mr-4 w-52 h-52"
                    />
                </View>
            </View>

            <View className="h-full px-5 pt-8 mt-8 bg-white rounded-3xl">
                <Text className="mb-2 text-base">Species: Seed</Text>
                <Text className="mb-2 text-base">Height: 23.6" (0.70 cm)</Text>
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
    );
}
