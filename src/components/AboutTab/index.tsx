import { Text, View } from "react-native";

import convertToTitleCase from "../../_utils/convertToTitleCase";
import type { Pokemon } from "../../types/interfaces/Pokemon";

interface AboutTabProps {
    viewedPokemon: Pokemon;
}

export default function AboutTab({ viewedPokemon }: AboutTabProps) {
    return (
        <View>
            <Text className="pb-3 text-lg font-bold">Pokemon Details</Text>
            <View className="flex flex-row gap-10">
                <View className="flex">
                    <Text className="mb-2 text-gray-500 text-md">Name</Text>
                    <Text className="mb-2 text-gray-500 text-md ">Height</Text>
                    <Text className="mb-2 text-gray-500 text-md">Weight</Text>
                    <Text className="mb-2 text-gray-500 text-md">
                        Base Experience
                    </Text>
                    <Text className="mb-2 text-gray-500 text-md">
                        Abilities
                    </Text>
                    <Text className="mb-2 text-gray-500 text-md">Types</Text>
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
    );
}
