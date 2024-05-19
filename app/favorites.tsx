import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";

import determineTypeColor from "../src/_utils/determineTypeColor";
import Button from "../src/components/Button";
import Header from "../src/components/Header";
import OverviewCard from "../src/components/OverviewCard";
import useFontHook from "../src/hooks/useFontHook";
import usePageStore from "../src/stores/pageStore";
import usePokemonStore from "../src/stores/pokemonStore";

export default function Favorites() {
    const { isFontLoaded } = useFontHook();

    const { favoritePokemonList } = usePokemonStore();

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
                {/* Favorite Pokemon List */}
                <View
                    className="flex flex-row flex-wrap justify-center"
                    style={{ gap: 12 }}
                >
                    {favoritePokemonList.map((p) => (
                        <OverviewCard key={p.id} pokemon={p} />
                    ))}
                </View>
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
