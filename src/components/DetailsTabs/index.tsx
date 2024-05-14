import React from "react";
import { View, Text, Pressable } from "react-native";

interface AboutTabProps {
    setOpenTab: React.Dispatch<React.SetStateAction<number>>;
    openTab: number;
}

export default function DetailsTab({ setOpenTab, openTab }: AboutTabProps) {
    const isActiveTab = (tabNum) =>
        openTab === tabNum
            ? "block py-3 font-bold text-black border-b-2 border-blue-500 hover:text-blue-500 focus:outline-none"
            : "block py-3 font-semibold text-gray-600 hover:text-blue-500 focus:outline-none";

    return (
        <View className="flex flex-row justify-between pb-4 ">
            <Pressable onPress={() => setOpenTab(1)}>
                <Text className={isActiveTab(1)}>About</Text>
            </Pressable>
            <Pressable onPress={() => setOpenTab(2)}>
                <Text className={isActiveTab(2)}>Base Stats</Text>
            </Pressable>
            <Pressable onPress={() => setOpenTab(3)}>
                <Text className={isActiveTab(3)}>Evolution</Text>
            </Pressable>
            <Pressable onPress={() => setOpenTab(4)}>
                <Text className={isActiveTab(4)}>Moves</Text>
            </Pressable>
        </View>
    );
}
