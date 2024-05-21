import { router } from "expo-router";
import { View, Text, Pressable, Button } from "react-native";

interface HomeTabsProps {
    openTab: number;
}

export default function HomeTabs({ openTab }: HomeTabsProps) {
    const isOpenTab = (tabNum: number) =>
        openTab === tabNum
            ? "flex items-center flex-1 justify-center bg-black/60"
            : "flex items-center flex-1 justify-center bg-black/40";

    return (
        <View className="justify-between flex flex-row flex-1 h-full  w-[100%] ">
            <View className="flex-row items-center justify-center flex-1 h-[100%]  w-[100%]">
                <Pressable
                    onPress={() => router.replace("home")}
                    className="w-[50%] h-[100%] "
                >
                    <View className={isOpenTab(1)}>
                        <Text className="px-5 py-3 text-center text-xl text-white font-chakra-bold w-[100%] h-[100%]">
                            All
                        </Text>
                    </View>
                </Pressable>
                <Pressable
                    onPress={() => router.replace("favorites")}
                    className="w-[50%] h-[100%]"
                >
                    <View className={isOpenTab(2)}>
                        <Text className="px-5 py-3 text-center text-xl text-white font-chakra-bold w-[100%] h-[100%]">
                            Favorites
                        </Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}
