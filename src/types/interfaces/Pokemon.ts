import { PokemonTypesEnum } from "../enums/PokemonTypesEnum";

export interface Pokemon {
    id: number;
    photoUrl: string;
    name: string;
    cry: string;
    height: number;
    weight: number;
    baseExperience: number;
    moves: string[];
    stats: StatsInfo[];
    abilities: AbilityInfo[];
    sprite: string;
    types: PokemonTypesEnum[];
}

export interface AbilityInfo {
    name: string;
    isHidden: boolean;
}

export interface StatsInfo {
    baseStat: number;
    effort: number;
    name: string;
}
