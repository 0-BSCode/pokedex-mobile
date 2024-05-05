import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button } from "react-native";
import { router } from "expo-router";

export default function Home() {
    return (
        <SafeAreaView>
            <Text className="mx-5 text-2xl font-black text-center ">
                Eyyy we at the home page cuhh
            </Text>
            <Button
                onPress={() => {
                    router.navigate("/");
                }}
                title="Go to Pokemon List"
            />
        </SafeAreaView>
    );
}
