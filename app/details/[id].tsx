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
                    <Text className="text-lg font-bold text-white">#001</Text>
                </View>
                <View className="flex flex-row gap-2 py-0">
                    <View className="flex items-center justify-center bg-white/50 rounded-3xl">
                        <Text className="px-5 py-1 font-bold text-white ">
                            Grass
                        </Text>
                    </View>

                    <View className="bg-white/50 rounded-3xl">
                        <Text className="px-5 py-1 font-bold text-white ">
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

            <View className="h-full px-5 pt-5 mt-8 bg-white rounded-3xl">
                <View className="flex flex-row justify-between py-4 text-md">
                    <Text>About</Text>
                    <Text>Base Stats</Text>
                    <Text>Evolution</Text>
                    <Text>Moves</Text>
                </View>
                <View className="flex flex-row gap-10">
                    <View className="flex ">
                        <Text className="mb-2 text-base">Species</Text>
                        <Text className="mb-2 text-base">Height</Text>
                        <Text className="mb-2 text-base">Weight</Text>
                        <Text className="mb-2 text-base">Abilities</Text>
                    </View>
                    <View className="flex ">
                        <Text className="mb-2 text-base">Seed</Text>
                        <Text className="mb-2 text-base">Height</Text>
                        <Text className="mb-2 text-base">Weight</Text>
                        <Text className="mb-2 text-base">Abilities</Text>
                    </View>
                </View>
                <View className="flex">
                    <Text className="text-lg font-bold">Breeding</Text>
                    <View className="flex flex-row gap-10">
                        <View className="flex">
                            <Text className="mb-2 text-base">Gender</Text>
                            <Text className="mb-2 text-base">Egg Groups</Text>
                            <Text className="mb-2 text-base">Egg Cycle</Text>
                        </View>
                        <View className="flex ">
                            <Text className="mb-2 text-base">Egg Groups</Text>
                            <Text className="mb-2 text-base">Egg Groups</Text>
                            <Text className="mb-2 text-base">Egg Cycle</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
