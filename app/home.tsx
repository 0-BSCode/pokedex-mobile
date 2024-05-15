import { router } from "expo-router";
import { Text, View, Button } from "react-native";

export default function Home() {
    return (
        <View>
            <Text className="mx-5 text-2xl font-black text-center ">
                Eyyy we at the home page cuhh
            </Text>
            <Button
                onPress={() => {
                    router.navigate("/");
                }}
                title="Go to Pokemon List"
            />
        </View>
    );
}
