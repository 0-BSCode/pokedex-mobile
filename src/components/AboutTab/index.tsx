import { ScrollView, Text, View } from "react-native";

import convertToTitleCase from "../../_utils/convertToTitleCase";
import type { Pokemon } from "../../types/interfaces/Pokemon";

interface AboutTabProps {
    viewedPokemon: Pokemon;
}

export default function AboutTab({ viewedPokemon }: AboutTabProps) {
    const details: Record<string, string> = {
        Name: convertToTitleCase(viewedPokemon.name),
        Height: viewedPokemon.height.toString(),
        Weight: viewedPokemon.weight.toString(),
        "Base Experience": viewedPokemon.baseExperience.toString(),
        Abilities: viewedPokemon.abilities
            .map((a) => convertToTitleCase(a.name))
            .join(", "),
        Types: viewedPokemon.types.map((a) => convertToTitleCase(a)).join(", ")
    };

    return (
        <ScrollView className="font-chakra">
            <Text className="pb-3 text-2xl font-chakra-bold">
                Pokemon Details
            </Text>
            <View className="flex gap-2">
                {Object.keys(details).map((key, idx) => (
                    <View
                        key={`detail-${idx}`}
                        className="flex flex-shrink flex-row gap-1 items-center"
                    >
                        <Text className="text-base text-gray-500 font-chakra w-1/2">
                            {key}
                        </Text>
                        <View className="flex flex-row flex-shrink">
                            <Text className="text-base text-base-900 font-chakra flex-shrink">
                                {details[key]}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}
