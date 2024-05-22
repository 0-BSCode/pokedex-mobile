import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { View, Pressable, Text } from "react-native";

import usePokemonStore from "../../stores/pokemonStore";
import useScreenStore from "../../stores/screenStore";
import { ScreensEnum } from "../../types/enums/ScreensEnum";
import { Pokemon } from "../../types/interfaces/Pokemon";

interface DetailsHeaderProps {
    viewedPokemon: Pokemon;
}

export default function DetailsHeader({ viewedPokemon }: DetailsHeaderProps) {
    const pokemonStore = usePokemonStore();
    const screenStore = useScreenStore();

    const isFavoritePokemon = () =>
        pokemonStore.favoritePokemonList.filter(
            (p) => p.id === viewedPokemon.id
        ).length !== 0;

    const handleAddToFavorites = () => {
        const newFavoritesList = [
            ...pokemonStore.favoritePokemonList,
            viewedPokemon
        ];
        const sortedList = newFavoritesList.sort((a, b) => a.id - b.id);
        pokemonStore.setFavoritePokemonList(sortedList);
    };

    const handleRemoveFromFavorites = () => {
        const updatedFavoritesList = pokemonStore.favoritePokemonList.filter(
            (p) => p.id !== viewedPokemon.id
        );
        pokemonStore.setFavoritePokemonList(updatedFavoritesList);

        // Prevents unfavorited Pokemon from showing whenn navigating back to favorites screen
        if (screenStore.currentScreen === ScreensEnum.FAVORITES) {
            pokemonStore.setFilteredPokemonList(updatedFavoritesList);
        }
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
