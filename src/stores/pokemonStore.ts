import { create } from "zustand";

import { FilterCriteriaEnum } from "../types/enums/FilterCriteriaEnum";
import { SortOrderEnum } from "../types/enums/SortOrderEnum";
import { Pokemon } from "../types/interfaces/Pokemon";

type PokemonStore = {
    pokemonList: Pokemon[];
    favoritePokemonList: Pokemon[];
    filteredPokemonList: Pokemon[];
    pokemonIdx: number;
    extendPokemonList: (values: Pokemon[]) => void;
    setFavoritePokemonList: (values: Pokemon[]) => void;
    setFilteredPokemonList: (values: Pokemon[]) => void;
    setPokemonIdx: (value: number) => void;
    searchPokemon: (
        criteria: FilterCriteriaEnum,
        searchString: string,
        listToFilter: Pokemon[]
    ) => void;
    sortPokemon: (
        criteria: FilterCriteriaEnum,
        sortOrder: SortOrderEnum
    ) => void;
};

const usePokemonStore = create<PokemonStore>()((set) => ({
    pokemonList: [],
    favoritePokemonList: [],
    filteredPokemonList: [],
    pokemonIdx: -1,
    setPokemonIdx: (value: number) => set((state) => ({ pokemonIdx: value })),
    extendPokemonList: (values: Pokemon[]) =>
        set((state) => ({
            pokemonList: [...state.pokemonList, ...values]
        })),
    setFilteredPokemonList: (values: Pokemon[]) =>
        set((state) => ({
            filteredPokemonList: values
        })),
    setFavoritePokemonList: (values: Pokemon[]) =>
        set((state) => ({ favoritePokemonList: values })),
    searchPokemon: (
        criteria: FilterCriteriaEnum,
        searchString: string,
        listToFilter: Pokemon[]
    ) =>
        set((state) => {
            let filteredPokemonList = listToFilter;

            if (searchString.length) {
                if (criteria === FilterCriteriaEnum.NAME) {
                    filteredPokemonList = filteredPokemonList.filter(
                        (pokemon) =>
                            pokemon.name
                                .toLowerCase()
                                .startsWith(searchString.toLowerCase())
                    );
                }

                if (
                    criteria === FilterCriteriaEnum.ID &&
                    !isNaN(Number(searchString))
                ) {
                    filteredPokemonList = filteredPokemonList.filter(
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
