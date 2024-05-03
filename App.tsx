import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
    Button,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";

import PokemonService from "./src/services/pokemonService";
import usePageStore from "./src/stores/pageStore";
import usePokemonStore from "./src/stores/pokemonStore";
import { Pokemon } from "./src/types/interfaces/Pokemon";

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
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <ScrollView>
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
            </ScrollView>

            <Button
                onPress={() => setPageNumber(pageNumber + 1)}
                title="Load More"
            />
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
