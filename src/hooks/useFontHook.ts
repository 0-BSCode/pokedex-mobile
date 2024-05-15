import { useFonts } from "expo-font";

const useFontHook = () => {
    const [isFontLoaded] = useFonts({
        "Chakra-Light": require("../../assets/fonts/ChakraPetch/ChakraPetch-Light.ttf"),
        "Chakra-Regular": require("../../assets/fonts/ChakraPetch/ChakraPetch-Regular.ttf"),
        "Chakra-Medium": require("../../assets/fonts/ChakraPetch/ChakraPetch-Medium.ttf"),
        "Chakra-SemiBold": require("../../assets/fonts/ChakraPetch/ChakraPetch-SemiBold.ttf"),
        "Chakra-Bold": require("../../assets/fonts/ChakraPetch/ChakraPetch-Bold.ttf")
    });

    return {
        isFontLoaded
    };
};

export default useFontHook;
