import { Image, Text, View } from "react-native";

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
                backgroundColor: determineTypeColor(pokemon.types[0]),
                padding: 12,
                width: 160,
                height: 120,
                position: "relative",
                borderRadius: 6
            }}
        >
            <Image className="flex-1 p-4 flex-row" />
            <View className="flex">
                <Text style={{ fontFamily: "Chakra-Regular" }}>
                    {pokemon.id.toString().padStart(3, "0")}
                </Text>
                <Text>{pokemon.name}</Text>
                {pokemon.types.map((t) => (
                    <View key={`${pokemon.id}-${t}`}>
                        <Text>{t}</Text>
                    </View>
                ))}
            </View>
            <Image
                style={{
                    width: 72,
                    height: 72,
                    position: "absolute",
                    bottom: 12,
                    right: 12
                }}
                source={{ uri: pokemon.photoUrl }}
                alt={`${pokemon.name} Photo`}
            />
        </View>
    );
};

export default OverviewCard;
