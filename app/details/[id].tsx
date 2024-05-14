import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Image, Text } from "react-native";

import convertToTitleCase from "../../src/_utils/convertToTitleCase";
import AboutTab from "../../src/components/AboutTab";
import DetailsTab from "../../src/components/DetailsTabs";
import EvolutionTab from "../../src/components/EvolutionsTab";
import MovesTab from "../../src/components/MovesTab";
import StatsTab from "../../src/components/StatsTab";
import usePokemonStore from "../../src/stores/pokemonStore";

export default function DetailsPage() {
    const [openTab, setOpenTab] = useState<number>(1);
    const { id } = useLocalSearchParams();
    const { pokemonList } = usePokemonStore();

    const viewedPokemon = pokemonList[Number(id) - 1];

    console.log(viewedPokemon);

    return (
        <View className="flex-1 py-8 bg-[#48d0b0]">
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
                <DetailsTab setOpenTab={setOpenTab} openTab={openTab} />

                {openTab === 1 && <AboutTab viewedPokemon={viewedPokemon} />}
                {openTab === 2 && <StatsTab viewedPokemon={viewedPokemon} />}
                {openTab === 3 && (
                    <EvolutionTab viewedPokemon={viewedPokemon} />
                )}
                {openTab === 4 && <MovesTab viewedPokemon={viewedPokemon} />}
            </View>
        </View>
    );
}
