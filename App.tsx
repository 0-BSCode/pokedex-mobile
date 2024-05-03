import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import PokemonService from "./src/services/pokemonService";
import usePokemonStore from "./src/stores/pokemonStore";
import { Pokemon } from "./src/types/interfaces/Pokemon";

export default function App() {
    const { pokemonList, setPokemonList } = usePokemonStore();
    const fetchPokemonInformation = async () => {
        const data = await PokemonService.fetchPage(0);
        const pokemonInfo: Pokemon[] = [];

        for (const result of data.results) {
            const pokemon = await PokemonService.fetchPokemon(result.url);
            pokemonInfo.push(pokemon);
        }

        setPokemonList(pokemonInfo);
    };

    useEffect(() => {
        fetchPokemonInformation();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            {pokemonList.map((p) => (
                <View key={p.id}>
                    <Text>{p.name}</Text>
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
            <StatusBar style="auto" />
        </View>
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
