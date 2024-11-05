import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AllCategories from "./AllCategories";

const CategoriesComponent: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.categoryTitle}>Categories</Text>
                <TouchableOpacity onPress={toggleExpand}>
                    <Text style={styles.seeAllText}>
                        {isExpanded ? "Close" : "See All"}
                    </Text>
                </TouchableOpacity>
            </View>

            <AllCategories isExpanded={isExpanded} />
        </View>
    );
};

export default CategoriesComponent;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        marginBottom: 16,
    },
    categoryTitle: {
        color: "#0c1a30",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 25,
    },
    seeAllText: {
        color: "#3669C9",
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 22,
    },
});