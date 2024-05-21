import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Image, Text } from "react-native";

import convertToTitleCase from "../../src/_utils/convertToTitleCase";
import determineTypeColor from "../../src/_utils/determineTypeColor";
import AboutTab from "../../src/components/AboutTab";
import DetailsHeader from "../../src/components/DetailsHeader";
import DetailsTab from "../../src/components/DetailsTabs";
import MovesTab from "../../src/components/MovesTab";
import StatsTab from "../../src/components/StatsTab";
import TypeIcon from "../../src/components/TypeIcon";
import usePokemonStore from "../../src/stores/pokemonStore";

export default function DetailsPage() {
    const [openTab, setOpenTab] = useState<number>(1);
    const { id } = useLocalSearchParams();
    const { pokemonList } = usePokemonStore();

    const viewedPokemon = pokemonList[Number(id) - 1];

    return (
        <View
            className="flex-1 py-8 font-chakra"
            style={{
                backgroundColor: determineTypeColor(viewedPokemon.types[0])
            }}
        >
            <DetailsHeader viewedPokemon={viewedPokemon} />
            <View className="px-5">
                <View className="flex flex-row items-center justify-between mb-2">
                    <Text className="text-3xl text-white font-chakra-bold">
                        {convertToTitleCase(viewedPokemon.name)}
                    </Text>
                    <Text className="text-lg text-white font-chakra-bold">
                        #{viewedPokemon.id.toString().padStart(3, "0")}
                    </Text>
                </View>
                <View className="flex flex-row gap-2 py-0">
                    {viewedPokemon.types.map((t) => (
                        <View
                            key={`${viewedPokemon.id}-${t}`}
                            className="flex flex-row items-center px-4 py-1 bg-white/50 rounded-3xl"
                        >
                            <View className="mr-2">
                                <TypeIcon type={t} />
                            </View>
                            <Text
                                className="font-chakra-bold"
                                style={{ color: determineTypeColor(t) }}
                            >
                                {convertToTitleCase(t)}
                            </Text>
                        </View>
                    ))}
                </View>
                <View className="flex flex-row justify-center">
                    <Image
                        source={{ uri: viewedPokemon.photoUrl }}
                        className="mr-4 w-60 h-60"
                    />
                </View>
            </View>

            <View className="h-full px-5 pt-5 mt-2 bg-white rounded-3xl">
                <DetailsTab setOpenTab={setOpenTab} openTab={openTab} />

                {openTab === 1 && <AboutTab viewedPokemon={viewedPokemon} />}
                {openTab === 2 && <StatsTab viewedPokemon={viewedPokemon} />}
                {openTab === 3 && <MovesTab viewedPokemon={viewedPokemon} />}
            </View>
            <StatusBar
                style="auto"
                backgroundColor={determineTypeColor(viewedPokemon.types[0])}
            />
        </View>
    );
}
