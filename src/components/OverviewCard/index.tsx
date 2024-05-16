import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

import capitalizeString from "../../_utils/capitalizeString";
import determineTypeColor from "../../_utils/determineTypeColor";
import { Pokemon } from "../../types/interfaces/Pokemon";

type OverviewCardProps = {
    pokemon: Pokemon;
};

const OverviewCard = ({ pokemon }: OverviewCardProps) => {
    return (
        <View
            key={pokemon.id}
            style={{
                backgroundColor: determineTypeColor(pokemon.types[0])
            }}
            className="p-3 w-40 h-32 relative rounded-md shadow-lg shadow-black"
        >
            <View style={{ display: "flex" }}>
                <Pressable
                    onPress={() => router.replace(`details/${pokemon.id}`)}
                >
                    <Text className="font-chakra-light text-gray-100 text-right text-xs">
                        {pokemon.id.toString().padStart(3, "0")}
                    </Text>
                    <Text className="font-chakra-bold text-white tracking-wider text-base">
                        {capitalizeString(pokemon.name)}
                    </Text>
                    <View className="flex gap-1 mt-1">
                        {pokemon.types.map((t) => (
                            <View key={`${pokemon.id}-${t}`}>
                                <Text className="text-white text-xs font-chakra">
                                    {capitalizeString(t)}
                                </Text>
                            </View>
                        ))}
                    </View>
                </Pressable>
            </View>
            <Image
                className="h-20 w-20 absolute bottom-3 right-3 -z-10"
                source={{ uri: pokemon.photoUrl }}
                alt={`${pokemon.name} Photo`}
            />
        </View>
    );
};

export default OverviewCard;
