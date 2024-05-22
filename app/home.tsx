import { StatusBar } from "expo-status-bar";
import { NativeWindStyleSheet } from "nativewind";
import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Button from "../src/components/Button";
import Header from "../src/components/Header";
import HomeTabs from "../src/components/HomeTabs";
import OverviewCard from "../src/components/OverviewCard";
import PokemonService from "../src/services/pokemonService";
import useFilterStore from "../src/stores/filterStore";
import usePageStore from "../src/stores/pageStore";
import usePokemonStore from "../src/stores/pokemonStore";
import { Pokemon } from "../src/types/interfaces/Pokemon";

NativeWindStyleSheet.setOutput({
    default: "native"
});

export default function App() {
    const pokemonStore = usePokemonStore();
    const pageStore = usePageStore();
    const filterStore = useFilterStore();

    const fetchPokemonInformation = async () => {
        const data = await PokemonService.fetchPage(pageStore.pageNumber);
        const pokemonInfo: Pokemon[] = [];

        for (const result of data.results) {
            const pokemon = await PokemonService.fetchPokemon(result.url);
            pokemonInfo.push(pokemon);
        }

        pokemonStore.setPokemonList(pokemonInfo);
    };

    useEffect(() => {
        if (pageStore.pageNumber !== pageStore.previousPage) {
            fetchPokemonInformation();
            pageStore.setPreviousPage(pageStore.pageNumber);
        }
    }, [pageStore.pageNumber]);

    // Whenever Pokemon are fetched or filters change, update filteredPokemon to apply filters
    useEffect(() => {
        if (filterStore.searchFilterCriteria) {
            pokemonStore.searchPokemon(
                filterStore.searchFilterCriteria,
                filterStore.searchString
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

    return (
        <View style={styles.container}>
            <Header openTab={1} />
            <ScrollView
                style={styles.scrollViewContainer}
                contentContainerStyle={{
                    maxWidth: "100%",
                    paddingVertical: 24
                }}
            >
                {/* Pokemon List */}
                <View
                    className="flex flex-row flex-wrap justify-center"
                    style={{ gap: 12 }}
                >
                    {pokemonStore.filteredPokemonList.map((p) => (
                        <OverviewCard key={p.id} pokemon={p} />
                    ))}
                </View>
                <Button
                    onPress={() =>
                        pageStore.setPageNumber(pageStore.pageNumber + 1)
                    }
                    title="Load More"
                    containerClasses="bg-sky-300 mt-3 flex items-center py-4 rounded-2xl"
                    textClasses="text-white font-chakra-bold tracking-wide"
                />
            </ScrollView>
            <View className="w-[100%] h-12 bg-red-600">
                <HomeTabs openTab={1} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Chakra-Regular",

        maxWidth: "100%"
    },
    scrollViewContainer: {
        width: "100%",
        paddingHorizontal: 12
    }
});
