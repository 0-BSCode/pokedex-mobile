import { View, Text, Button } from "react-native";

export default function DetailsTab() {
    return (
        <View className="flex flex-row justify-between pb-4">
            <Text className="block px-3 py-3 font-medium text-blue-500 border-b-2 border-blue-500 hover:text-blue-500 focus:outline-none">
                About
            </Text>
            <Text className="block py-3 text-gray-600 hover:text-blue-500 focus:outline-none">
                Base Stats
            </Text>
            <Text className="block py-3 text-gray-600 hover:text-blue-500 focus:outline-none">
                Evolution
            </Text>
            <Text className="block px-3 py-3 text-gray-600 hover:text-blue-500 focus:outline-none">
                Moves
            </Text>
        </View>
    );
}
