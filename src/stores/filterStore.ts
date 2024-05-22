import { create } from "zustand";

import { FilterCriteriaEnum } from "../types/enums/FilterCriteriaEnum";
import { SortOrderEnum } from "../types/enums/SortOrderEnum";

type FilterStore = {
    // Filter Modal
    isVisible: boolean;
    setIsVisible: (value: boolean) => void;

    // Searching
    searchFilterCriteria: FilterCriteriaEnum | undefined;
    setSearchFilterCriteria: (value: FilterCriteriaEnum) => void;
    searchString: string;
    setSearchString: (value: string) => void;

    // Sorting
    sortFilterCriteria: FilterCriteriaEnum | undefined;
    setSortFilterCriteria: (value: FilterCriteriaEnum) => void;
    sortOrder: SortOrderEnum | undefined;
    setSortOrder: (value: SortOrderEnum) => void;
};

const useFilterStore = create<FilterStore>()((set) => ({
    // Filter modal
    isVisible: false,
    setIsVisible: (value: boolean) => set((state) => ({ isVisible: value })),

    // Searching
    searchFilterCriteria: undefined,
    setSearchFilterCriteria: (value: FilterCriteriaEnum) =>
        set((state) => ({ searchFilterCriteria: value })),
    searchString: "",
    setSearchString: (value: string) =>
        set((state) => ({ searchString: value })),

    // Sorting
    sortFilterCriteria: undefined,
    setSortFilterCriteria: (value: FilterCriteriaEnum) =>
        set((state) => ({ sortFilterCriteria: value })),
    sortOrder: undefined,
    setSortOrder: (value: SortOrderEnum) =>
        set((state) => ({ sortOrder: value }))
}));

export default useFilterStore;
