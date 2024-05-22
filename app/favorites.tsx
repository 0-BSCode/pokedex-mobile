import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";

import Header from "../src/components/Header";
import HomeTabs from "../src/components/HomeTabs";
import OverviewCard from "../src/components/OverviewCard";
import useFontHook from "../src/hooks/useFontHook";
import useFilterStore from "../src/stores/filterStore";
import usePokemonStore from "../src/stores/pokemonStore";

export default function Favorites() {
    const { isFontLoaded } = useFontHook();

    const pokemonStore = usePokemonStore();
    const filterStore = useFilterStore();

    // Whenever Pokemon are fetched or filters change, update filteredPokemon to apply filters
    useEffect(() => {
        if (filterStore.searchFilterCriteria) {
            pokemonStore.searchPokemon(
                filterStore.searchFilterCriteria,
                filterStore.searchString,
                pokemonStore.favoritePokemonList
            );
        }

        if (filterStore.sortFilterCriteria && filterStore.sortOrder) {
            pokemonStore.sortPokemon(
                filterStore.sortFilterCriteria,
                filterStore.sortOrder
            );
        }
    }, [
        pokemonStore.pokemonList,
        filterStore.searchFilterCriteria,
        filterStore.searchString,
        filterStore.sortFilterCriteria,
        filterStore.sortOrder
    ]);

    useEffect(() => {
        pokemonStore.setFilteredPokemonList(pokemonStore.favoritePokemonList);
    }, []);

    if (!isFontLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View className="items-center justify-center flex-1 bg-white font-chakra">
            <Header />

            <ScrollView
                contentContainerStyle={{
                    maxWidth: "100%",
                    paddingVertical: 24
                }}
            >
                {/* Favorite Pokemon List */}
                <View
                    className="flex flex-row flex-wrap justify-center"
                    style={{ gap: 12 }}
                >
                    {pokemonStore.filteredPokemonList.map((p) => (
                        <OverviewCard key={p.id} pokemon={p} />
                    ))}
                </View>
            </ScrollView>
            <View className="w-[100%] h-12 bg-red-600">
                <HomeTabs openTab={2} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
