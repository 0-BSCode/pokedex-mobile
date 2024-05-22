import { StatusBar } from "expo-status-bar";
import { NativeWindStyleSheet } from "nativewind";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";

import Button from "../src/components/Button";
import Header from "../src/components/Header";
import HomeTabs from "../src/components/HomeTabs";
import OverviewCard from "../src/components/OverviewCard";
import useFontHook from "../src/hooks/useFontHook";
import PokemonService from "../src/services/pokemonService";
import useFilterStore from "../src/stores/filterStore";
import usePageStore from "../src/stores/pageStore";
import usePokemonStore from "../src/stores/pokemonStore";
import { Pokemon } from "../src/types/interfaces/Pokemon";

NativeWindStyleSheet.setOutput({
    default: "native"
});

export default function App() {
    const { isFontLoaded } = useFontHook();
    const [isFetching, setIsFetching] = useState(false);

    const pokemonStore = usePokemonStore();
    const pageStore = usePageStore();
    const filterStore = useFilterStore();

    const fetchPokemonInformation = async () => {
        setIsFetching(true);
        const data = await PokemonService.fetchPage(pageStore.pageNumber);
        const pokemonInfo: Pokemon[] = [];

        for (const result of data.results) {
            const pokemon = await PokemonService.fetchPokemon(result.url);
            pokemonInfo.push(pokemon);
        }

        pokemonStore.extendPokemonList(pokemonInfo);
        pokemonStore.setFilteredPokemonList([
            ...pokemonStore.filteredPokemonList,
            ...pokemonInfo
        ]);
        setIsFetching(false);
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
                filterStore.searchString,
                pokemonStore.pokemonList
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

    if (!isFontLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Header />
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
                {isFetching && (
                    <ActivityIndicator size="large" className="my-3" />
                )}
                <Button
                    onPress={() => {
                        if (!isFetching) {
                            pageStore.setPageNumber(pageStore.pageNumber + 1);
                        }
                    }}
                    title="Load More"
                    containerClasses={`${isFetching ? "bg-red-300" : "bg-red-700"} mt-3 flex items-center py-4 rounded-2xl`}
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
