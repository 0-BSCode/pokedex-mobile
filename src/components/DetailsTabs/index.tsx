import React from "react";
import { View, Text, Pressable } from "react-native";

interface AboutTabProps {
    setOpenTab: React.Dispatch<React.SetStateAction<number>>;
}

export default function DetailsTab({ setOpenTab }: AboutTabProps) {
    return (
        <View className="flex flex-row justify-between pb-4 ">
            <Pressable onPress={() => setOpenTab(1)}>
                <Text className="block px-3 py-3 font-bold text-blue-500 border-b-2 border-blue-500 hover:text-blue-500 focus:outline-none">
                    About
                </Text>
            </Pressable>
            <Pressable onPress={() => setOpenTab(2)}>
                <Text className="block py-3 font-semibold text-gray-600 hover:text-blue-500 focus:outline-none">
                    Base Stats
                </Text>
            </Pressable>
            <Pressable onPress={() => setOpenTab(3)}>
                <Text className="block py-3 font-semibold text-gray-600 hover:text-blue-500 focus:outline-none">
                    Evolution
                </Text>
            </Pressable>
            <Pressable onPress={() => setOpenTab(4)}>
                <Text className="block px-3 py-3 font-semibold text-gray-600 hover:text-blue-500 focus:outline-none">
                    Moves
                </Text>
            </Pressable>
        </View>
    );
}
