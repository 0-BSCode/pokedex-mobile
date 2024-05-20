import {
    View,
    Text,
    Dimensions,
    Image,
    ImageSourcePropType
} from "react-native";

interface Props {
    heading: string;
    body: string;
    imgSrc: ImageSourcePropType;
}

export default function OnboardingPage({ heading, body, imgSrc }: Props) {
    const dimensions = Dimensions.get("window");
    const imgWidth = dimensions.width;

    return (
        <View>
            <View
                style={{
                    width: imgWidth,
                    height: imgWidth,
                    padding: 20
                }}
            >
                <Image
                    className="w-full h-full"
                    resizeMode="contain"
                    source={imgSrc}
                />
            </View>
            <View className="flex gap-3 px-5 pb-6">
                <Text className="text-2xl font-chakra-bold">{heading}</Text>
                <Text className="text-base font-chakra">{body}</Text>
            </View>
        </View>
    );
}
