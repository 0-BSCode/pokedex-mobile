import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";

import usePokemonStore from "../../stores/pokemonStore";
import useScreenStore from "../../stores/screenStore";
import { ScreensEnum } from "../../types/enums/ScreensEnum";

interface HomeTabsProps {
    openTab: ScreensEnum;
}

export default function HomeTabs({ openTab }: HomeTabsProps) {
    const pokemonStore = usePokemonStore();
    const screenStore = useScreenStore();

    const isOpen = (screen: ScreensEnum) =>
        openTab === screen
            ? "flex items-center flex-1 justify-center bg-black/60"
            : "flex items-center flex-1 justify-center bg-black/40";

    const handleOnPress = (newScreen: ScreensEnum) => {
        // Set filteredList to appropriate list
        const newList =
            newScreen === ScreensEnum.HOME
                ? pokemonStore.pokemonList
                : pokemonStore.favoritePokemonList;
        pokemonStore.setFilteredPokemonList(newList);

        // Take note of new screen
        screenStore.setCurrentScreen(newScreen);

        // Navigate to new screen
        router.replace(newScreen);
    };

    return (
        <View className="justify-between flex flex-row flex-1 h-full  w-[100%] ">
            <View className="flex-row items-center justify-center flex-1 h-[100%]  w-[100%]">
                <Pressable
                    onPress={() => handleOnPress(ScreensEnum.HOME)}
                    className="w-[50%] h-[100%] "
                >
                    <View className={isOpen(ScreensEnum.HOME)}>
                        <Text className="px-5 py-3 text-center text-xl text-white font-chakra-bold w-[100%] h-[100%]">
                            All
                        </Text>
                    </View>
                </Pressable>
                <Pressable
                    onPress={() => handleOnPress(ScreensEnum.FAVORITES)}
                    className="w-[50%] h-[100%]"
                >
                    <View className={isOpen(ScreensEnum.FAVORITES)}>
                        <Text className="px-5 py-3 text-center text-xl text-white font-chakra-bold w-[100%] h-[100%]">
                            Favorites
                        </Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}
