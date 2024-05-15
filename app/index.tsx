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
    SafeAreaView,
    Pressable
} from "react-native";

import PokemonService from "../src/services/pokemonService";
import usePageStore from "../src/stores/pageStore";
import usePokemonStore from "../src/stores/pokemonStore";
import { Pokemon } from "../src/types/interfaces/Pokemon";

NativeWindStyleSheet.setOutput({
    default: "native"
});

export default function App() {
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
            <Button
                onPress={() => {
                    router.navigate("/details/1");
                }}
                title="Go to Details"
            />
            <ScrollView>
                {pokemonList.map((p) => (
                    <View key={p.id}>
                        <Pressable
                            onPress={() => {
                                router.navigate(`/details/${p.id}`);
                            }}
                        >
                            <Text>{p.name}</Text>
                            <Image
                                style={{
                                    width: 50,
                                    height: 50
                                }}
                                source={{ uri: p.photoUrl }}
                                alt={`${p.name} Photo`}
                            />
                        </Pressable>
                    </View>
                ))}
            </ScrollView>

            <Button
                onPress={() => setPageNumber(pageNumber + 1)}
                title="Load More"
            />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#aaa",
        alignItems: "center",
        justifyContent: "center"
    }
});
