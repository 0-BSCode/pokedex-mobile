import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { NativeWindStyleSheet } from "nativewind";
import { useEffect } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Pressable
} from "react-native";

import determineTypeColor from "../src/_utils/determineTypeColor";
import Button from "../src/components/Button";
import Header from "../src/components/Header";
import OverviewCard from "../src/components/OverviewCard";
import useFontHook from "../src/hooks/useFontHook";
import PokemonService from "../src/services/pokemonService";
import usePageStore from "../src/stores/pageStore";
import usePokemonStore from "../src/stores/pokemonStore";
import { Pokemon } from "../src/types/interfaces/Pokemon";

NativeWindStyleSheet.setOutput({
    default: "native"
});

export default function App() {
    const { isFontLoaded } = useFontHook();

    const { pokemonList, setPokemonList } = usePokemonStore();
    const { pageNumber, setPageNumber } = usePageStore();

    const fetchPokemonInformation = async () => {
        const data = await PokemonService.fetchPage(pageNumber);
        const pokemonInfo: Pokemon[] = [];

        for (const result of data.results) {
            const pokemon = await PokemonService.fetchPokemon(result.url);
            pokemonInfo.push(pokemon);
        }

        setPokemonList([...pokemonList, ...pokemonInfo]);
    };

    useEffect(() => {
        fetchPokemonInformation();
    }, [pageNumber]);

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
                    {pokemonList.map((p) => (
                        <OverviewCard key={p.id} pokemon={p} />
                    ))}
                </View>
                <Button
                    onPress={() => setPageNumber(pageNumber + 1)}
                    title="Load More"
                    containerStyles={{
                        backgroundColor: "skyblue",
                        marginTop: 12,
                        display: "flex",
                        alignItems: "center",
                        paddingVertical: 16,
                        borderRadius: 12
                    }}
                    textStyles={{
                        color: "white",
                        fontFamily: "Chakra-Regular",
                        letterSpacing: 2.5,
                        fontWeight: "700"
                    }}
                />
            </ScrollView>
            <View>
                <Text className="font-chakra">Hello</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Chakra-Regular",
        paddingVertical: 32,
        maxWidth: "100%",
        paddingHorizontal: 12
    },
    scrollViewContainer: {
        width: "100%"
    }
});
