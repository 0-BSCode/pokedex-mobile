import { View, Text } from "react-native";

export default function Header() {
    return (
        <View className="flex flex-row justify-between px-4 py-3 bg-red-600">
            <Text className="text-3xl font-chakra-bold">Pokedex</Text>
        </View>
    );
}
