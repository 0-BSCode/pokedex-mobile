import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

async function checkIfFirstLaunch() {
    try {
        const hasFirstLaunched = await AsyncStorage.getItem("@user_onboarded");
        if (hasFirstLaunched === null) {
            return true;
        }
        return false;
    } catch (_) {
        return false;
    }
}

const useGetOnboardingStatus = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(false);
    const [isFirstLaunchIsLoading, setIsFirstLaunchIsLoading] = useState(true);

    useEffect(() => {
        const checkForFirstLaunch = async () => {
            const firstLaunch = await checkIfFirstLaunch();
            setIsFirstLaunch(firstLaunch);
            setIsFirstLaunchIsLoading(false);
        };
        checkForFirstLaunch();
    }, []);

    return {
        isFirstLaunch,
        isLoading: isFirstLaunchIsLoading
    };
};

export default useGetOnboardingStatus;
