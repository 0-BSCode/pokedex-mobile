import { create } from "zustand";

import { Pokemon } from "../types/interfaces/Pokemon";

type PokemonStore = {
    pokemonList: Pokemon[];
    favoritePokemonList: Pokemon[];
    filteredPokemonList: Pokemon[];
    setPokemonList: (newValue: Pokemon[]) => void;
    setFavoritePokemonList: (newValue: Pokemon[]) => void;
};

const usePokemonStore = create<PokemonStore>()((set) => ({
    pokemonList: [],
    favoritePokemonList: [],
    filteredPokemonList: [],
    setPokemonList: (newValue: Pokemon[]) =>
        set((state) => ({ pokemonList: newValue })),
    setFavoritePokemonList: (newValue: Pokemon[]) =>
        set((state) => ({ favoritePokemonList: newValue }))
}));

export default usePokemonStore;
