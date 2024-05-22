import { create } from "zustand";

type PageStore = {
    pageNumber: number;
    setPageNumber: (newValue: number) => void;
    previousPage: number;
    setPreviousPage: (newValue: number) => void;
};

const usePageStore = create<PageStore>()((set) => ({
    pageNumber: 0,
    setPageNumber: (newValue: number) =>
        set((state) => ({ pageNumber: newValue })),
    // Tracks latest fetched page so we don't refetch it again
    previousPage: -1,
    setPreviousPage: (newValue: number) =>
        set((state) => ({ previousPage: newValue }))
}));

export default usePageStore;
