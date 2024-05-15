import { Text, View } from "react-native";

import convertToTitleCase from "../../_utils/convertToTitleCase";
import type { Pokemon } from "../../types/interfaces/Pokemon";

interface AboutTabProps {
    viewedPokemon: Pokemon;
}

export default function AboutTab({ viewedPokemon }: AboutTabProps) {
    return (
        <View>
            <Text className="pb-3 text-2xl font-bold">Pokemon Details</Text>
            <View className="flex flex-row gap-10 ">
                <View className="flex">
                    <Text className="mb-2 text-base text-gray-500">Name</Text>
                    <Text className="mb-2 text-base text-gray-500 ">
                        Height
                    </Text>
                    <Text className="mb-2 text-base text-gray-500">Weight</Text>
                    <Text className="mb-2 text-base text-gray-500">
                        Base Experience
                    </Text>
                    <Text className="mb-2 text-base text-gray-500">
                        Abilities
                    </Text>
                    <Text className="mb-2 text-base text-gray-500">Types</Text>
                </View>
                <View className="flex ">
                    <Text className="mb-2 text-base text-base-900">
                        {convertToTitleCase(viewedPokemon.name)}
                    </Text>
                    <Text className="mb-2 text-base font-semibold text-base-900">
                        {viewedPokemon.height}
                    </Text>
                    <Text className="mb-2 text-base text-base-900">
                        {viewedPokemon.weight}
                    </Text>
                    <Text className="mb-2 text-base text-base-900">
                        {viewedPokemon.baseExperience}
                    </Text>
                    <Text className="mb-2 text-base text-base-900">
                        {viewedPokemon.abilities
                            .map((a) => convertToTitleCase(a.name))
                            .join(", ")}
                    </Text>
                    <Text className="mb-2 text-base text-base-900">
                        {viewedPokemon.types
                            .map((a) => convertToTitleCase(a))
                            .join(", ")}
                    </Text>
                </View>
            </View>
        </View>
    );
}
