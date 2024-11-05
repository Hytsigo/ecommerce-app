import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ProductProps {
    Icon: React.FC;
    title: string;
    price: number;
    rating: number;
    reviews: number;
}

const ProductIconComponent: React.FC<ProductProps> = ({
    Icon,
    title,
    price,
    rating,
    reviews,
}) => {
    return (
        <View style={styles.productContainer}>
            <Icon />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>
                COL: ${price.toLocaleString("es-CO")}
            </Text>
            <View style={styles.ratingContainer}>
                <View style={styles.rating}>
                    <Ionicons name="star" color="gold" size={16} />
                    <Text>{rating}</Text>
                </View>
                <Text>{reviews} Reviews</Text>
            </View>
        </View>
    );
};

export default ProductIconComponent;

const styles = StyleSheet.create({
    productContainer: {
        width: 156,
        height: 242,
        margin: 10,
        paddingVertical: 15,
        alignItems: "center",
        gap: 5,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    price: {
        fontSize: 14,
        color: "#666",
    },
    ratingContainer: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
});
