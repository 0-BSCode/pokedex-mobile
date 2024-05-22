import Checkbox from "expo-checkbox";
import { useEffect, useRef } from "react";
import { Text, TextInput, View } from "react-native";

import useFilterStore from "../../stores/filterStore";
import { FilterCriteriaEnum } from "../../types/enums/FilterCriteriaEnum";
import { SortOrderEnum } from "../../types/enums/SortOrderEnum";
import Button from "../Button";

const Form = () => {
    const filterStore = useFilterStore();
    // Prevents search string from resetting when modal initially renders
    const isInitialRender = useRef(true);

    const isSearchDisabled = filterStore.searchFilterCriteria === undefined;
    const isSearchByName =
        !isSearchDisabled &&
        filterStore.searchFilterCriteria === FilterCriteriaEnum.NAME;
    const isSortDisabled = filterStore.sortFilterCriteria === undefined;

    useEffect(() => {
        if (!isInitialRender.current) {
            filterStore.setSearchString("");
        }
    }, [filterStore.searchFilterCriteria]);

    useEffect(() => {
        isInitialRender.current = false;
    }, []);

    return (
        // Form
        <View className="relative flex gap-y-4 m-auto w-11/12 z-50">
            {/* Search checkboxes */}
            <View className="flex gap-y-2">
                <Text className="text-white font-chakra-medium text-lg">
                    Search by:
                </Text>
                {/* Checkboxes */}
                <View className="flex flex-row gap-x-4">
                    <View className="flex flex-row gap-1 items-center">
                        {/* Checkbox */}
                        <Checkbox
                            value={
                                filterStore.searchFilterCriteria ===
                                FilterCriteriaEnum.NAME
                            }
                            onValueChange={() =>
                                filterStore.setSearchFilterCriteria(
                                    FilterCriteriaEnum.NAME
                                )
                            }
                        />
                        <Text className="text-white font-chakra text-base">
                            Name
                        </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center">
                        {/* Checkbox */}
                        <Checkbox
                            value={
                                filterStore.searchFilterCriteria ===
                                FilterCriteriaEnum.ID
                            }
                            onValueChange={() =>
                                filterStore.setSearchFilterCriteria(
                                    FilterCriteriaEnum.ID
                                )
                            }
                        />
                        <Text className="text-white font-chakra text-base">
                            ID
                        </Text>
                    </View>
                </View>
                <TextInput
                    className={`rounded-md text-white font-chakra p-2 text-base border-2 ${isSearchDisabled ? "border-gray-300" : "border-white"}`}
                    placeholderTextColor={"#ddd"}
                    placeholder={
                        isSearchDisabled
                            ? "Enter Pokemon Info..."
                            : `Enter Pokemon ${isSearchByName ? "Name" : "ID"}`
                    }
                    // editable={!isSearchDisabled}
                    // selectTextOnFocus={!isSearchDisabled}
                    value={filterStore.searchString}
                    onChangeText={(text) => {
                        filterStore.setSearchString(text);
                    }}
                />
            </View>
            {/* Sort checkboxes */}
            <View className="flex gap-y-2">
                <Text className="text-white font-chakra-medium text-lg">
                    Sort by:
                </Text>
                {/* Checkboxes */}
                <View className="flex flex-row gap-x-4">
                    <View className="flex flex-row gap-1 items-center">
                        {/* Checkbox */}
                        <Checkbox
                            value={
                                filterStore.sortFilterCriteria ===
                                FilterCriteriaEnum.NAME
                            }
                            onValueChange={() =>
                                filterStore.setSortFilterCriteria(
                                    FilterCriteriaEnum.NAME
                                )
                            }
                        />
                        <Text className="text-white font-chakra text-base">
                            Name
                        </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center">
                        {/* Checkbox */}
                        <Checkbox
                            value={
                                filterStore.sortFilterCriteria ===
                                FilterCriteriaEnum.ID
                            }
                            onValueChange={() =>
                                filterStore.setSortFilterCriteria(
                                    FilterCriteriaEnum.ID
                                )
                            }
                        />
                        <Text className="text-white font-chakra text-base">
                            ID
                        </Text>
                    </View>
                </View>
                {/* Sorting buttons */}
                <View className="mt-2 w-full">
                    <Button
                        isDisabled={isSortDisabled}
                        title="Ascending"
                        onPress={() =>
                            filterStore.setSortOrder(SortOrderEnum.ASC)
                        }
                        containerClasses={`mb-1 rounded-md border-2 p-2 ${filterStore.sortOrder === SortOrderEnum.ASC ? "border-green-300" : "border-gray-300"}`}
                        textClasses={`text-center uppercase font-chakra-medium ${filterStore.sortOrder === SortOrderEnum.ASC ? "text-green-300" : "text-gray-300"}`}
                    />
                    <Button
                        isDisabled={isSortDisabled}
                        title="Descending"
                        onPress={() =>
                            filterStore.setSortOrder(SortOrderEnum.DESC)
                        }
                        containerClasses={`mt-1 rounded-md border-2 p-2 ${filterStore.sortOrder === SortOrderEnum.DESC ? "border-green-300" : "border-gray-300"}`}
                        textClasses={`text-center uppercase font-chakra-medium ${filterStore.sortOrder === SortOrderEnum.DESC ? "text-green-300" : "text-gray-300"}`}
                    />
                </View>
            </View>
        </View>
    );
};

export default Form;
