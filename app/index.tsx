import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { NativeWindStyleSheet } from "nativewind";
import { useEffect } from "react";
import {
    Button,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    SafeAreaView
} from "react-native";

import determineTypeColor from "../src/_utils/determineTypeColor";
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
        <SafeAreaView style={styles.container}>
            <Text className="mx-5 text-2xl font-black text-center ">
                Open up App.tsx to start working on your app!
            </Text>
            <Button
                onPress={() => {
                    router.navigate("/home");
                }}
                title="Go to Home Page"
            />
            <ScrollView>
                <View className="flex flex-wrap gap-2">
                    {pokemonList.map((p) => (
                        <View key={p.id}>
                            <Text>{p.name}</Text>
                            <Image
                                style={{
                                    backgroundColor: determineTypeColor(
                                        p.types[0]
                                    )
                                }}
                                className="flex-1 p-4 flex-row"
                            />
                            <View className="flex">
                                <Text>{p.id}</Text>
                                <Text>{p.name}</Text>
                                {p.types.map((t) => (
                                    <View key={`${p.id}-${t}`}>
                                        <Text>{t}</Text>
                                    </View>
                                ))}
                            </View>
                            <Image
                                style={{
                                    width: 50,
                                    height: 50
                                }}
                                source={{ uri: p.photoUrl }}
                                alt={`${p.name} Photo`}
                            />
                        </View>
                    ))}
                </View>
                <Button
                    onPress={() => setPageNumber(pageNumber + 1)}
                    title="Load More"
                />
            </ScrollView>
            <View>
                <Text>Hello</Text>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#aaa",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Chakra-Regular"
    },
    textTitle: {
        fontFamily: "Chakra-Regular"
    },
    scrollViewContainer: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center"
    }
});
