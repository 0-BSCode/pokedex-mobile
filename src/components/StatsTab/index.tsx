import { Text, View } from "react-native";

import {
    getStatBarColor,
    getStatBarLength
} from "../../_utils/getStatBarLengthAndColor";
import type { Pokemon } from "../../types/interfaces/Pokemon";

interface StatsTabProps {
    viewedPokemon: Pokemon;
}

export default function StatsTab({ viewedPokemon }: StatsTabProps) {
    return (
        <View>
            <Text className="pb-3 text-2xl font-bold">Pokemon Stats</Text>
            <View className="flex flex-row w-full gap-2 ">
                <View className="flex mr-2">
                    <Text className="mb-2 text-base text-gray-500">HP</Text>

                    <Text className="mb-2 text-base text-gray-500 ">
                        Attack
                    </Text>
                    <Text className="mb-2 text-base text-gray-500">
                        Defense
                    </Text>
                    <Text className="mb-2 text-base text-gray-500">
                        Sp. Attack
                    </Text>
                    <Text className="mb-2 text-base text-gray-500">
                        Sp. Defense
                    </Text>
                    <Text className="mb-2 text-base text-gray-500">Speed</Text>
                </View>
                <View className="flex-1">
                    {viewedPokemon.stats.map((stat) => (
                        <View className="flex flex-row items-center gap-4 mb-2">
                            <Text className="text-base font-semibold text-black">
                                {stat.baseStat}
                            </Text>
                            <View className=" bg-gray-200 h-1.5 rounded-full flex-1 pr-3 ">
                                <View
                                    className={getStatBarColor(stat.baseStat)}
                                    style={getStatBarLength(stat.baseStat)}
                                ></View>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}
