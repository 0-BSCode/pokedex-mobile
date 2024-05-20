import Checkbox from "expo-checkbox";
import { useEffect } from "react";
import { Text, TextInput, View } from "react-native";

import useFilterStore from "../../stores/filterStore";
import { FilterCriteriaEnum } from "../../types/enums/FilterCriteriaEnum";
import { SortOrderEnum } from "../../types/enums/SortOrderEnum";
import Button from "../Button";

const Form = () => {
    const filterStore = useFilterStore();

    const isSearchDisabled = filterStore.searchFilterCriteria === undefined;
    const isSearchByName =
        !isSearchDisabled &&
        filterStore.searchFilterCriteria === FilterCriteriaEnum.NAME;
    const isSortDisabled = filterStore.sortFilterCriteria === undefined;

    useEffect(() => {
        filterStore.setSearchString("");
    }, [filterStore.searchFilterCriteria]);
    return (
        // Form
        <View className="flex gap-4 m-1">
            {/* Search checkboxes */}
            <View className="flex gap-y-1">
                <Text className="text-white font-chakra-medium">
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
                            onChange={() =>
                                filterStore.setSearchFilterCriteria(
                                    FilterCriteriaEnum.NAME
                                )
                            }
                        />
                        <Text className="text-white font-chakra">Name</Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center">
                        {/* Checkbox */}
                        <Checkbox
                            value={
                                filterStore.searchFilterCriteria ===
                                FilterCriteriaEnum.ID
                            }
                            onChange={() =>
                                filterStore.setSearchFilterCriteria(
                                    FilterCriteriaEnum.ID
                                )
                            }
                        />
                        <Text className="text-white font-chakra">ID</Text>
                    </View>
                </View>
                <TextInput
                    className="text-white font-chakra p-1 border-white border-2"
                    placeholderTextColor={"#ddd"}
                    placeholder={
                        isSearchDisabled
                            ? "Enter Pokemon Info..."
                            : `Enter Pokemon ${isSearchByName ? "Name" : "ID"}`
                    }
                    editable={!isSearchDisabled}
                    selectTextOnFocus={!isSearchDisabled}
                    value={filterStore.searchString}
                    onChangeText={(text) => {
                        filterStore.setSearchString(text);
                    }}
                />
            </View>
            {/* Sort checkboxes */}
            <View className="flex gap-y-1">
                <Text className="text-white font-chakra-medium">Sort by:</Text>
                {/* Checkboxes */}
                <View className="flex flex-row gap-4">
                    <View className="flex flex-row gap-1 items-center">
                        {/* Checkbox */}
                        <Checkbox
                            value={
                                filterStore.sortFilterCriteria ===
                                FilterCriteriaEnum.NAME
                            }
                            onChange={() =>
                                filterStore.setSortFilterCriteria(
                                    FilterCriteriaEnum.NAME
                                )
                            }
                        />
                        <Text className="text-white font-chakra">Name</Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center">
                        {/* Checkbox */}
                        <Checkbox
                            value={
                                filterStore.sortFilterCriteria ===
                                FilterCriteriaEnum.ID
                            }
                            onChange={() =>
                                filterStore.setSortFilterCriteria(
                                    FilterCriteriaEnum.ID
                                )
                            }
                        />
                        <Text className="text-white font-chakra">ID</Text>
                    </View>
                </View>
                {/* Sorting buttons */}
                <View className="flex gap-4 mt-2">
                    <Button
                        isDisabled={isSortDisabled}
                        title="Ascending"
                        onPress={() =>
                            filterStore.setSortOrder(SortOrderEnum.ASC)
                        }
                        containerClasses={`border-2 p-2 ${filterStore.sortOrder === SortOrderEnum.ASC ? "border-green-300" : "border-gray-300"}`}
                        textClasses={`text-center uppercase font-chakra-medium ${filterStore.sortOrder === SortOrderEnum.ASC ? "text-green-300" : "text-gray-300"}`}
                    />
                    <Button
                        isDisabled={isSortDisabled}
                        title="Descending"
                        onPress={() =>
                            filterStore.setSortOrder(SortOrderEnum.DESC)
                        }
                        containerClasses={`border-2 p-2 ${filterStore.sortOrder === SortOrderEnum.DESC ? "border-green-300" : "border-gray-300"}`}
                        textClasses={`text-center uppercase font-chakra-medium ${filterStore.sortOrder === SortOrderEnum.DESC ? "text-green-300" : "text-gray-300"}`}
                    />
                </View>
            </View>
        </View>
    );
};

export default Form;
