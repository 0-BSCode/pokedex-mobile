import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { View, Pressable, Text } from "react-native";

import usePokemonStore from "../../stores/pokemonStore";
import useScreenStore from "../../stores/screenStore";
import { Pokemon } from "../../types/interfaces/Pokemon";

interface DetailsHeaderProps {
    viewedPokemon: Pokemon;
}

export default function DetailsHeader({ viewedPokemon }: DetailsHeaderProps) {
    const { favoritePokemonList, setFavoritePokemonList } = usePokemonStore();
    const screenStore = useScreenStore();

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
            <Pressable
                onPress={() => router.replace(screenStore.currentScreen)}
            >
                <Ionicons name="arrow-back-outline" size={32} color="white" />
            </Pressable>
            <Pressable
                onPress={
                    isFavoritePokemon()
                        ? handleRemoveFromFavorites
                        : handleAddToFavorites
                }
            >
                {/* TODO: Replace this with an icon */}
                <Text className="px-2 py-1 text-xl text-white rounded-md font-chakra-bold ">
                    {isFavoritePokemon() ? (
                        <Ionicons name="heart" size={32} color="white" />
                    ) : (
                        <Ionicons
                            name="heart-outline"
                            size={32}
                            color="white"
                        />
                    )}
                </Text>
            </Pressable>
        </View>
    );
}
