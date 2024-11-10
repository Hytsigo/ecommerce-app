import { Colors } from "@/constants/globalStyles";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AllProductsComponent from "./AllProductsComponent";

const FeaturedComponent: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <View style={styles.container}>
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
    container: {
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: Colors.secondaryOffGrey,
        padding: 10,
        marginVertical: 10,
        alignSelf: "center",
        width: "90%",
        alignItems: "center",
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        marginBottom: 16,
        width: "100%",
        alignItems: "center",
    },
    categoryTitle: {
        color: Colors.primaryNavyBlack,
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 25,
        width: "100%",
    },
    seeAllText: {
        color: Colors.primaryBlueOcean,
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 22,
        textAlign: "center",
        width: "100%",
    },
});
