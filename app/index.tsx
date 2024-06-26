import { Link, router } from "expo-router";
import {
    Text,
    View,
    ScrollView,
    Platform,
    ActivityIndicator
} from "react-native";
import Swiper from "react-native-swiper";

import Header from "../src/components/Header";
import OnboardingPage from "../src/components/OnboardingPage";
import useFontHook from "../src/hooks/useFontHook";
import useOnboardingStatus from "../src/hooks/useOnboardingStatus";

export default function Onboarding() {
    const { isFontLoaded } = useFontHook();
    const { isFirstLaunch, isLoading } = useOnboardingStatus();

    if (!isFontLoaded || isLoading) {
        return <ActivityIndicator size="large" className="my-3" />;
    }

    if (!isFirstLaunch) {
        router.replace("/home");
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                className="flex"
                stickyHeaderIndices={[0]}
                scrollEnabled={false}
            >
                <Header />
                <Swiper
                    autoplay={true}
                    autoplayTimeout={5}
                    showsPagination={false}
                    showsButtons={Platform.OS === "web"}
                >
                    <OnboardingPage
                        heading="Welcome to the world of Pokemon!"
                        body="The world of Pokemon is teeming with unique
                                creatures to discover and befriend. This journey
                                starts with your very first catch! But don't
                                worry, we'll guide you through every step."
                        imgSrc={require("../assets/img/onboarding-1.png")}
                    />
                    <OnboardingPage
                        heading="Your trusty Pokedex!"
                        body="The Pokedex is your ultimate companion in the Pokemon world. It's a comprehensive catalog that stores information on every Pokemon you encounter. Use it to learn about their types, moves, and even interesting facts!"
                        imgSrc={require("../assets/img/onboarding-2.png")}
                    />
                    <OnboardingPage
                        heading="Find your favorites!"
                        body="As you explore the world, you'll meet many fascinating Pokemon. The ones that truly capture your heart can be favorited! This creates a handy list for you to quickly revisit your favorite Pokemon and learn more about them."
                        imgSrc={require("../assets/img/onboarding-3.png")}
                    />
                </Swiper>
            </ScrollView>

            <View>
                <Link
                    href="/home"
                    replace={true}
                    className="w-full py-3 text-xl text-center text-white bg-red-800 font-chakra-bold"
                >
                    <Text>Proceed</Text>
                </Link>
            </View>
        </View>
    );
}
