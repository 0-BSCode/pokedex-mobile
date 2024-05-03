import inferTypeFromString from "../_utils/inferTypeFromString";
import { PaginationResponse } from "../types/interfaces/PaginationResponse";
import { Pokemon } from "../types/interfaces/Pokemon";
import { PokemonResponse } from "../types/interfaces/PokemonResponse";

const BASE_URL = "https://pokeapi.co/api/v2";
const LIMIT = 10;
const OFFSET = 10;

const PokemonService = {
    fetchPage: async (pageNumber: number) => {
        const response = await fetch(
            `${BASE_URL}/pokemon/?limit=${LIMIT}&offset=${OFFSET * pageNumber}`
        );
        const data = (await response.json()) as PaginationResponse;
        return data;
    },
    fetchPokemon: async (url: string) => {
        // Fetch data
        const response = await fetch(url);
        const data = (await response.json()) as PokemonResponse;

        const pokemon: Pokemon = {
            id: data.id,
            height: data.height,
            weight: data.weight,
            cry: data.cries.latest,
            abilities: data.abilities.map((a) => ({
                name: a.ability.name,
                isHidden: a.is_hidden
            })),
            baseExperience: data.base_experience,
            name: data.name,
            sprite: data.sprites.front_default,
            moves: data.moves.map((m) => m.move.name),
            stats: data.stats.map((s) => ({
                baseStat: s.base_stat,
                effort: s.effort,
                name: s.stat.name
            })),
            types: data.types.map((t) => inferTypeFromString(t.type.name))
        };

        return pokemon;
    }
};

export default PokemonService;
