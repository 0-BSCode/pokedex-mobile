import { create } from "zustand";

type PokemonStore = {
    pokemonList: number;
    inc: () => void;
};

const usePokemonStore = create<PokemonStore>()((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 }))
}));

export default usePokemonStore;
