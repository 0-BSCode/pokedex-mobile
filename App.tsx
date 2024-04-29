import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView className="h-screen">
      <StatusBar style="auto" />
      <View className="bg-blue-500 h-screen ">
        <Text className="text-2xl font-black mx-5 text-center">
          Open up App.tsx to start working on your app!
        </Text>
      </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#aaa",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
