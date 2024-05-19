import { router } from "expo-router";
import { View, Button } from "react-native";

export default function Home() {
    return (
        <View>
            <Button
                onPress={() => {
                    router.navigate("/");
                }}
                title="Go to Pokemon List"
            />
        </View>
    );
}
