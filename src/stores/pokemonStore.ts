import { create } from "zustand";

import { FilterCriteriaEnum } from "../types/enums/FilterCriteriaEnum";
import { SortOrderEnum } from "../types/enums/SortOrderEnum";
import { Pokemon } from "../types/interfaces/Pokemon";

type PokemonStore = {
    pokemonList: Pokemon[];
    filteredPokemonList: Pokemon[];
    pokemonIdx: number;
    setPokemonList: (value: Pokemon[]) => void;
    setPokemonIdx: (value: number) => void;
    searchPokemon: (criteria: FilterCriteriaEnum, searchString: string) => void;
    sortPokemon: (
        criteria: FilterCriteriaEnum,
        sortOrder: SortOrderEnum
    ) => void;
};

const usePokemonStore = create<PokemonStore>()((set) => ({
    pokemonList: [],
    filteredPokemonList: [],
    pokemonIdx: -1,
    setPokemonIdx: (value: number) => set((state) => ({ pokemonIdx: value })),
    setPokemonList: (values: Pokemon[]) =>
        set((state) => ({
            pokemonList: [...state.pokemonList, ...values],
            filteredPokemonList: [...state.pokemonList, ...values]
        })),
    searchPokemon: (criteria: FilterCriteriaEnum, searchString: string) =>
        set((state) => {
            let filteredPokemonList = state.pokemonList;

            if (searchString.length) {
                if (criteria === FilterCriteriaEnum.NAME) {
                    filteredPokemonList = state.pokemonList.filter((pokemon) =>
                        pokemon.name
                            .toLowerCase()
                            .startsWith(searchString.toLowerCase())
                    );
                }

                if (
                    criteria === FilterCriteriaEnum.ID &&
                    !isNaN(Number(searchString))
                ) {
                    filteredPokemonList = state.pokemonList.filter(
                        (pokemon) => pokemon.id === Number(searchString)
                    );
                }
            }

            return {
                filteredPokemonList
            };
        }),
    // Sorts only the filtered Pokemon (since other Pokemon won't be displayed)
    sortPokemon: (criteria: FilterCriteriaEnum, sortOrder: SortOrderEnum) =>
        set((state) => {
            const sortedPokemon = state.filteredPokemonList.sort((a, b) => {
                if (criteria === FilterCriteriaEnum.NAME) {
                    if (a.name < b.name)
                        return sortOrder === SortOrderEnum.ASC ? -1 : 1;
                    if (a.name > b.name)
                        return sortOrder === SortOrderEnum.ASC ? 1 : -1;
                }

                if (criteria === FilterCriteriaEnum.ID) {
                    return sortOrder === SortOrderEnum.ASC
                        ? a.id - b.id
                        : b.id - a.id;
                }

                return 0;
            });

            return {
                filteredPokemonList: sortedPokemon
            };
        })
}));

export default usePokemonStore;
