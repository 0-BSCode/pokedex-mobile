import {
    Entypo,
    MaterialIcons,
    FontAwesome,
    FontAwesome5,
    FontAwesome6,
    Ionicons
} from "@expo/vector-icons";

import determineTypeColor from "../../_utils/determineTypeColor";
import { PokemonTypesEnum } from "../../types/enums/PokemonTypesEnum";

interface Props {
    type: PokemonTypesEnum;
}

export default function TypeIcon({ type }: Props) {
    switch (type) {
        case PokemonTypesEnum.BUG:
            return (
                <Entypo name="bug" size={20} color={determineTypeColor(type)} />
            );
        case PokemonTypesEnum.DARK:
            return (
                <MaterialIcons
                    name="dark-mode"
                    size={20}
                    color={determineTypeColor(type)}
                />
            );
        case PokemonTypesEnum.DRAGON:
            return (
                <FontAwesome6
                    name="dragon"
                    size={20}
                    color={determineTypeColor(type)}
                />
            );
        case PokemonTypesEnum.ELECTRIC:
            return (
                <FontAwesome6
                    name="bolt-lightning"
                    size={20}
                    color={determineTypeColor(type)}
                />
            );
        case PokemonTypesEnum.FAIRY:
            return (
                <Ionicons
                    name="sparkles"
                    size={20}
                    color={determineTypeColor(type)}
                />
            );
        case PokemonTypesEnum.FIGHTING:
            return (
                <FontAwesome6
                    name="hand-fist"
                    size={20}
                    color={determineTypeColor(type)}
                />
            );
        case PokemonTypesEnum.FIRE:
            return (
                <FontAwesome6
                    name="fire"
                    size={20}
                    color={determineTypeColor(type)}
                />
            );
        case PokemonTypesEnum.FLYING:
            return (
                <FontAwesome5
                    name="wind"
                    size={20}
                    color={determineTypeColor(type)}
                />
            );
        case PokemonTypesEnum.GHOST:
            return (
                <FontAwesome6
                    name="ghost"
                    size={20}
                    color={determineTypeColor(type)}
                />
            );
        case PokemonTypesEnum.GROUND:
            return (
                <FontAwesome6
                    name="mountain"
                    size={20}
                    color={determineTypeColor(type)}
                />
            );
        case PokemonTypesEnum.GRASS:
            return (
                <Entypo
                    name="leaf"
                    size={20}
                    color={determineTypeColor(type)}
                />
            );
        case PokemonTypesEnum.ICE:
            return (
                <FontAwesome6
                    name="snowflake"
                    size={20}
                    color={determineTypeColor(type)}
                />
            );
        case PokemonTypesEnum.NORMAL:
            return (
                <FontAwesome
                    name="circle-o"
                    size={20}
                    color={determineTypeColor(type)}
                />
            );
        case PokemonTypesEnum.POISON:
            return (
                <Ionicons
                    name="skull-sharp"
                    size={20}
                    color={determineTypeColor(type)}
                />
            );
        case PokemonTypesEnum.PSYCHIC:
            return (
                <FontAwesome5
                    name="eye"
                    size={20}
                    color={determineTypeColor(type)}
                />
            );
        case PokemonTypesEnum.ROCK:
            return (
                <FontAwesome6
                    name="burst"
                    size={20}
                    color={determineTypeColor(type)}
                />
            );
        case PokemonTypesEnum.STEEL:
            return (
                <FontAwesome6
                    name="weight-hanging"
                    size={20}
                    color={determineTypeColor(type)}
                />
            );
        case PokemonTypesEnum.WATER:
            return (
                <FontAwesome6
                    name="droplet"
                    size={20}
                    color={determineTypeColor(type)}
                />
            );
        default:
            return (
                <FontAwesome6
                    name="question-circle"
                    size={20}
                    color={determineTypeColor(type)}
                />
            );
    }
}
