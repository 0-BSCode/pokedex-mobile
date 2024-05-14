import { Text, View } from "react-native";

import {
    getStatBarColor,
    getStatBarLength
} from "../../_utils/getStatBarLengthAndColor";
import type { Pokemon } from "../../types/interfaces/Pokemon";

interface EvolutionTabProps {
    viewedPokemon: Pokemon;
}

export default function EvolutionTab({ viewedPokemon }: EvolutionTabProps) {
    return (
        <View>
            <Text className="pb-3 text-lg font-bold">Evolution Chain</Text>
        </View>
    );
}
