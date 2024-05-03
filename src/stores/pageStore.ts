import { create } from "zustand";

type PageStore = {
    pageNumber: number;
    setPageNumber: (newValue: number) => void;
};

const usePageStore = create<PageStore>()((set) => ({
    pageNumber: 0,
    setPageNumber: (newValue: number) =>
        set((state) => ({ pageNumber: newValue }))
}));

export default usePageStore;
