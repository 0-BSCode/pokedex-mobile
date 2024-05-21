import AntDesignIcon from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { View, Pressable } from "react-native";

import usePokemonStore from "../../stores/pokemonStore";
import { Pokemon } from "../../types/interfaces/Pokemon";

interface DetailsHeaderProps {
    viewedPokemon: Pokemon;
}

export default function DetailsHeader({ viewedPokemon }: DetailsHeaderProps) {
    const { favoritePokemonList, setFavoritePokemonList } = usePokemonStore();

    const isFavoritePokemon = () =>
        favoritePokemonList.filter((p) => p.id === viewedPokemon.id).length !==
        0;

    const handleAddToFavorites = () => {
        setFavoritePokemonList([...favoritePokemonList, viewedPokemon]);
    };

    const handleRemoveFromFavorites = () => {
        setFavoritePokemonList(
            favoritePokemonList.filter((p) => p.id !== viewedPokemon.id)
        );
    };

    return (
        <View className="flex flex-row justify-between px-4 pb-4">
            <Pressable onPress={() => router.replace("/home")}>
                <View className="p-3 text-xl text-center text-white rounded-full aspect-square font-chakra-bold bg-white/50">
                    <AntDesignIcon name="left" size={16} color="black" />
                </View>
            </Pressable>
            <Pressable
                onPress={
                    isFavoritePokemon()
                        ? handleRemoveFromFavorites
                        : handleAddToFavorites
                }
            >
                <View className="p-3 text-xl text-center text-white rounded-full aspect-square font-chakra-bold bg-white/50">
                    {isFavoritePokemon() ? (
                        <AntDesignIcon name="heart" size={16} color="black" />
                    ) : (
                        <AntDesignIcon name="hearto" size={16} color="black" />
                    )}
                </View>
            </Pressable>
        </View>
    );
}
