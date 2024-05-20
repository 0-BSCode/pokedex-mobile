import { StatusBar } from "expo-status-bar";
import { NativeWindStyleSheet } from "nativewind";
import { useEffect, useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import Button from "../src/components/Button";
import Form from "../src/components/Form";
import Modal from "../src/components/Modal";
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
    const [isVisible, setIsVisible] = useState(false);
    const isFetched = useRef(false);

    const {
        pokemonList,
        filteredPokemonList,
        setPokemonList,
        sortPokemon,
        searchPokemon
    } = usePokemonStore();
    const { pageNumber, setPageNumber } = usePageStore();
    const filterStore = useFilterStore();

    const fetchPokemonInformation = async () => {
        const data = await PokemonService.fetchPage(pageNumber);
        const pokemonInfo: Pokemon[] = [];

        for (const result of data.results) {
            const pokemon = await PokemonService.fetchPokemon(result.url);
            pokemonInfo.push(pokemon);
        }

        setPokemonList(pokemonInfo);
    };

    // Prevent re-fetching on re-renders (mainly for dev purposes so we don't show multiple pokemon with the same ID)
    useEffect(() => {
        if (!isFetched.current) {
            fetchPokemonInformation();
            isFetched.current = true;
        }
    }, []);

    useEffect(() => {
        if (pageNumber > 0) {
            fetchPokemonInformation();
        }
    }, [pageNumber]);

    // Whenever Pokemon are fetched or filters change, update filteredPokemon to apply filters
    useEffect(() => {
        if (filterStore.searchFilterCriteria) {
            searchPokemon(
                filterStore.searchFilterCriteria,
                filterStore.searchString
            );
        }

        if (filterStore.sortFilterCriteria && filterStore.sortOrder) {
            sortPokemon(filterStore.sortFilterCriteria, filterStore.sortOrder);
        }
    }, [
        pokemonList,
        filterStore.searchFilterCriteria,
        filterStore.searchString,
        filterStore.sortFilterCriteria,
        filterStore.sortOrder
    ]);

    if (!isFontLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View className="flex-1 bg-white items-center">
            <Button
                isDisabled={false}
                onPress={() => {
                    setIsVisible(true);
                }}
                title="Open modal"
                textClasses=""
                containerClasses=""
            />
            <Modal
                title={"Filters"}
                isVisible={isVisible}
                onClose={() => setIsVisible(false)}
                children={<Form />}
            />
            <Text className="text-2xl font-black text-center font-chakra">
                Pokedex
            </Text>
            <ScrollView
                className="w-full"
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
                    {filteredPokemonList.map((p) => (
                        <OverviewCard key={p.id} pokemon={p} />
                    ))}
                </View>
                <Button
                    onPress={() => setPageNumber(pageNumber + 1)}
                    title="Load More"
                    containerClasses="bg-sky-300 mt-3 flex items-center py-4 rounded-2xl"
                    textClasses="text-white font-chakra-bold tracking-wide"
                    // TODO: Disable on fetch
                />
            </ScrollView>
            <View>
                <Text className="font-chakra">Hello</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
