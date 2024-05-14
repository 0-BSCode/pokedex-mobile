import { Image, Text, View } from "react-native";

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
                backgroundColor: determineTypeColor(pokemon.types[0]),
                padding: 12,
                width: 160,
                height: 120,
                position: "relative",
                borderRadius: 6
            }}
        >
            <View style={{ display: "flex" }}>
                <Text
                    style={{
                        fontFamily: "Chakra-Regular",
                        fontWeight: "100",
                        textAlign: "right",
                        color: "whitesmoke",
                        fontSize: 12
                    }}
                >
                    {pokemon.id.toString().padStart(3, "0")}
                </Text>
                <Text
                    style={{
                        fontFamily: "Chakra-Regular",
                        fontWeight: "700",
                        color: "white",
                        letterSpacing: 2,
                        fontSize: 16
                    }}
                >
                    {capitalizeString(pokemon.name)}
                </Text>
                <View style={{ display: "flex", gap: 3, marginTop: 8 }}>
                    {pokemon.types.map((t) => (
                        <View key={`${pokemon.id}-${t}`}>
                            <Text style={{ color: "white", fontSize: 12 }}>
                                {capitalizeString(t)}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
            <Image
                style={{
                    width: 72,
                    height: 72,
                    position: "absolute",
                    bottom: 12,
                    right: 12,
                    zIndex: -1
                }}
                source={{ uri: pokemon.photoUrl }}
                alt={`${pokemon.name} Photo`}
            />
        </View>
    );
};

export default OverviewCard;
