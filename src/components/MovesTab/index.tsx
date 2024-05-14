import { ScrollView, Text, View } from "react-native";

import type { Pokemon } from "../../types/interfaces/Pokemon";

interface MovesTabProps {
    viewedPokemon: Pokemon;
}

export default function MovesTab({ viewedPokemon }: MovesTabProps) {
    const removeHyphenAndMakeToTitleCase = (str) => {
        const words = str.split("-");

        const capitalizedWords = words.map(
            (word: string) => word.charAt(0).toUpperCase() + word.slice(1)
        );

        return capitalizedWords.join(" ");
    };

    return (
        <ScrollView>
            <Text className="pb-3 text-lg font-bold">Move List</Text>
            <View className="flex gap-2">
                <ScrollView className="overflow-hidden border border-gray-200 rounded shadow-md">
                    {viewedPokemon.moves.map((m) => (
                        <Text
                            key={m}
                            className="px-4 py-2 bg-white border-b border-gray-200 "
                        >
                            {removeHyphenAndMakeToTitleCase(m)}
                        </Text>
                    ))}
                </ScrollView>
                ;
            </View>
        </ScrollView>
    );
}
