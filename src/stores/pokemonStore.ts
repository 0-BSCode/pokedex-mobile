import { create } from "zustand";

import { Pokemon } from "../types/interfaces/Pokemon";

type PokemonStore = {
    pokemonList: Pokemon[];
    filteredPokemonList: Pokemon[];
    setPokemonList: (newValue: Pokemon[]) => void;
};

const usePokemonStore = create<PokemonStore>()((set) => ({
    pokemonList: [],
    filteredPokemonList: [],
    setPokemonList: (newValue: Pokemon[]) =>
        set((state) => ({ pokemonList: newValue }))
}));

export default usePokemonStore;
