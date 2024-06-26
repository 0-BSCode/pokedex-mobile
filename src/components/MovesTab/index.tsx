import { ScrollView, Text, View } from "react-native";

import capitalizeString from "../../_utils/capitalizeString";
import type { Pokemon } from "../../types/interfaces/Pokemon";

interface MovesTabProps {
    viewedPokemon: Pokemon;
}

export default function MovesTab({ viewedPokemon }: MovesTabProps) {
    const removeHyphenAndMakeToTitleCase = (str: string) => {
        const words = str.split("-");

        const capitalizedWords = words.map((word: string) =>
            capitalizeString(word)
        );

        return capitalizedWords.join(" ");
    };

    return (
        <ScrollView>
            <Text className="pb-3 text-2xl font-chakra-bold">Move List</Text>
            <View className="flex gap-2">
                <ScrollView className="overflow-hidden border border-gray-200 rounded shadow-md">
                    {viewedPokemon.moves.map((m) => (
                        <Text
                            key={m}
                            className="px-4 py-2 text-base bg-white border-b border-gray-200 font-chakra "
                        >
                            {removeHyphenAndMakeToTitleCase(m)}
                        </Text>
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    );
}
