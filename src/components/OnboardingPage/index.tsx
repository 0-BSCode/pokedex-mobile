import {
    View,
    Text,
    Image,
    ImageSourcePropType,
    Dimensions,
    Platform
} from "react-native";

interface Props {
    heading: string;
    body: string;
    imgSrc: ImageSourcePropType;
}

export default function OnboardingPage({ heading, body, imgSrc }: Props) {
    const screenWidth =
        Platform.OS === "web"
            ? Dimensions.get("window").height / 1.5
            : Dimensions.get("window").width;

    return (
        <View>
            <View className="flex items-center p-5">
                <Image
                    style={{ width: screenWidth - 40, height: screenWidth }}
                    source={imgSrc}
                />
            </View>
            <View className="flex gap-3 px-5">
                <Text className="text-2xl font-chakra-bold">{heading}</Text>
                <Text className="text-base font-chakra">{body}</Text>
            </View>
        </View>
    );
}
