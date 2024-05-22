import { create } from "zustand";

import { ScreensEnum } from "../types/enums/ScreensEnum";

type ScreenStore = {
    currentScreen: ScreensEnum;
    setCurrentScreen: (newValue: ScreensEnum) => void;
};

const useScreenStore = create<ScreenStore>()((set) => ({
    currentScreen: ScreensEnum.HOME,
    setCurrentScreen: (newValue: ScreensEnum) =>
        set((state) => ({ currentScreen: newValue }))
}));

export default useScreenStore;
