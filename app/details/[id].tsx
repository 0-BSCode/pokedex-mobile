import { useLocalSearchParams } from "expo-router";
import { View, Image, Text } from "react-native";

import convertToTitleCase from "../../src/_utils/convertToTitleCase";
import DetailsTab from "../../src/components/DetailsTabs";
import usePokemonStore from "../../src/stores/pokemonStore";

export default function DetailsPage() {
    const { id } = useLocalSearchParams();
    const { pokemonList } = usePokemonStore();

    const viewedPokemon = pokemonList[Number(id) - 1];

    console.log(viewedPokemon);

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
                        source={{ uri: viewedPokemon.photoUrl }}
                        className="mr-4 w-52 h-52"
                    />
                </View>
            </View>

            <View className="h-full px-5 pt-5 mt-8 bg-white rounded-3xl">
                <DetailsTab />

                <Text className="pb-3 text-lg font-bold">Pokemon Details</Text>
                <View className="flex flex-row gap-10">
                    <View className="flex">
                        <Text className="mb-2 text-gray-500 text-md">Name</Text>
                        <Text className="mb-2 text-gray-500 text-md ">
                            Height
                        </Text>
                        <Text className="mb-2 text-gray-500 text-md">
                            Weight
                        </Text>
                        <Text className="mb-2 text-gray-500 text-md">
                            Base Experience
                        </Text>
                        <Text className="mb-2 text-gray-500 text-md">
                            Abilities
                        </Text>
                        <Text className="mb-2 text-gray-500 text-md">
                            Types
                        </Text>
                    </View>
                    <View className="flex ">
                        <Text className="mb-2 text-base-900 text-md">
                            {convertToTitleCase(viewedPokemon.name)}
                        </Text>
                        <Text className="mb-2 text-base-900 text-md">
                            {viewedPokemon.height}
                        </Text>
                        <Text className="mb-2 text-base-900 text-md">
                            {viewedPokemon.weight}
                        </Text>
                        <Text className="mb-2 text-base-900 text-md">
                            {viewedPokemon.baseExperience}
                        </Text>
                        <Text className="mb-2 text-base-900 text-md">
                            {viewedPokemon.abilities
                                .map((a) => convertToTitleCase(a.name))
                                .join(", ")}
                        </Text>
                        <Text className="mb-2 text-base-900 text-md">
                            {viewedPokemon.types
                                .map((a) => convertToTitleCase(a))
                                .join(", ")}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
