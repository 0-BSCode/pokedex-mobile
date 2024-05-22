import { router } from "expo-router";
import { View, Pressable, Text } from "react-native";

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
        const newFavoritesList = [...favoritePokemonList, viewedPokemon];
        const sortedList = newFavoritesList.sort((a, b) => a.id - b.id);
        setFavoritePokemonList(sortedList);
    };

    const handleRemoveFromFavorites = () => {
        setFavoritePokemonList(
            favoritePokemonList.filter((p) => p.id !== viewedPokemon.id)
        );
    };

    return (
        <View className="flex flex-row justify-between px-4 pb-4">
            <Pressable onPress={() => router.replace("/home")}>
                <Text className="px-2 py-1 text-xl text-white rounded-md font-chakra-bold bg-white/50">
                    Back
                </Text>
            </Pressable>
            <Pressable
                onPress={
                    isFavoritePokemon()
                        ? handleRemoveFromFavorites
                        : handleAddToFavorites
                }
            >
                {/* TODO: Replace this with an icon */}
                <Text className="px-2 py-1 text-xl text-white rounded-md font-chakra-bold bg-white/50">
                    {isFavoritePokemon()
                        ? "Remove from Favorites"
                        : "Add to Favorites"}
                </Text>
            </Pressable>
        </View>
    );
}
