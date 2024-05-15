import { Text, View } from "react-native";

import { getStatBarLength } from "../../_utils/getStatBarLengthAndColor";
import type { Pokemon } from "../../types/interfaces/Pokemon";

interface StatsTabProps {
    viewedPokemon: Pokemon;
}

export default function StatsTab({ viewedPokemon }: StatsTabProps) {
    const getStatBarColor = (statValue: number) => {
        console.log(statValue);

        if (statValue >= 100) {
            return "h-full bg-blue-400 block rounded-full";
        } else if (statValue < 50) {
            console.log("less");
            return `h-full bg-red-400 block rounded-full`;
        } else {
            return `h-full bg-red-400 block rounded-full`;
        }
    };
    return (
        <View>
            <Text className="pb-3 text-2xl font-chakra-bold">
                Pokemon Stats
            </Text>
            <View className="flex flex-row w-full gap-2 ">
                <View className="flex mr-2">
                    <Text className="mb-2 text-base text-gray-500 font-chakra">
                        HP
                    </Text>

                    <Text className="mb-2 text-base text-gray-500 font-chakra ">
                        Attack
                    </Text>
                    <Text className="mb-2 text-base text-gray-500 font-chakra">
                        Defense
                    </Text>
                    <Text className="mb-2 text-base text-gray-500 font-chakra">
                        Sp. Attack
                    </Text>
                    <Text className="mb-2 text-base text-gray-500 font-chakra">
                        Sp. Defense
                    </Text>
                    <Text className="mb-2 text-base text-gray-500 font-chakra">
                        Speed
                    </Text>
                </View>
                <View className="flex-1">
                    {viewedPokemon.stats.map((stat) => (
                        <View className="flex flex-row items-center gap-4 mb-2">
                            <Text className="text-base text-black font-chakra-bold">
                                {stat.baseStat}
                            </Text>
                            <View className=" bg-gray-200 h-1.5 rounded-full flex-1  ">
                                {/* <View
                                    className={getStatBarColor(stat.baseStat)}
                                    style={getStatBarLength(stat.baseStat)}
                                ></View> */}
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
