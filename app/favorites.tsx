import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";

import Header from "../src/components/Header";
import HomeTabs from "../src/components/HomeTabs";
import OverviewCard from "../src/components/OverviewCard";
import useFontHook from "../src/hooks/useFontHook";
import usePokemonStore from "../src/stores/pokemonStore";

export default function Favorites() {
    const { isFontLoaded } = useFontHook();

    const { favoritePokemonList } = usePokemonStore();

    if (!isFontLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View className="items-center justify-center flex-1 bg-white font-chakra">
            <Header openTab={2} />

            <ScrollView
                className=""
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
            <View className="w-[100%] h-12 bg-red-600">
                <HomeTabs openTab={2} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
