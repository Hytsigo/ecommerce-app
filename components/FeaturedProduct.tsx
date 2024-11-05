import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AllProductsComponent from "./AllProductsComponent";

const FeaturedComponent: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <View
            style={{
                borderTopEndRadius: 10,
                borderTopLeftRadius: 10,
            }}
        >
            <View style={styles.headerContainer}>
                <Text style={styles.categoryTitle}>Featured Product</Text>
                <TouchableOpacity onPress={toggleExpand}>
                    <Text style={styles.seeAllText}>
                        {isExpanded ? "Close" : "See All"}
                    </Text>
                </TouchableOpacity>
            </View>
            <AllProductsComponent isExpanded={isExpanded} />
        </View>
    );
};

export default FeaturedComponent;

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
