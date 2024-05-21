import { Link, router } from "expo-router";
import { Text, View, ScrollView } from "react-native";
// import PagerView from "react-native-pager-view";

import Header from "../src/components/Header";
import OnboardingPage from "../src/components/OnboardingPage";
import useFontHook from "../src/hooks/useFontHook";
import useOnboardingStatus from "../src/hooks/useOnboardingStatus";

export default function Onboarding() {
    const { isFontLoaded } = useFontHook();
    const { isFirstLaunch, isLoading } = useOnboardingStatus();

    if (!isFontLoaded || isLoading) {
        return <Text>Loading...</Text>;
    }

    if (!isFirstLaunch) {
        router.replace("/home");
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView className="flex" stickyHeaderIndices={[0]}>
                <Header />
                {/* <PagerView initialPage={0} useNext={false}>
                    <OnboardingPage
                        heading="Welcome to the world of Pokemon!"
                        body="The world of Pokemon is teeming with unique
                                creatures to discover and befriend. This journey
                                starts with your very first catch! But don't
                                worry, we'll guide you through every step."
                        imgSrc={require("../assets/img/1x1.png")}
                    />
                    <OnboardingPage
                        heading="Your trusty Pokedex!"
                        body="The Pokedex is your ultimate companion in the Pokemon world. It's a comprehensive catalog that stores information on every Pokemon you encounter. Use it to learn about their types, moves, and even interesting facts!"
                        imgSrc={require("../assets/img/1x1.png")}
                    />
                    <OnboardingPage
                        heading="Find your favorites!"
                        body="As you explore the world, you'll meet many fascinating Pokemon. The ones that truly capture your heart can be favorited! This creates a handy list for you to quickly revisit your favorite Pokemon and learn more about them."
                        imgSrc={require("../assets/img/1x1.png")}
                    />
                </PagerView> */}
            </ScrollView>

            <View>
                <Link
                    href="/home"
                    replace={true}
                    className="w-full py-2 text-center bg-stone-200"
                >
                    <Text>Proceed</Text>
                </Link>
            </View>
        </View>
    );
}
