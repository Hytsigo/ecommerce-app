import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/globalStyles";
import { Welcome } from "@/interfaces/productInterfaces";

const ProductIconComponent: React.FC<Welcome> = ({
    title,
    price,
    rating,
    category,
    image,
}) => {
    return (
        <View style={styles.productContainer}>
            <Image source={{ uri: image }} style={styles.productImage} />
            <Text style={styles.title}>
                {title.length > 20 ? `${title.substring(0, 20)}...` : title}
            </Text>
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.price}>
                COL: ${price.toLocaleString("es-CO")}
            </Text>
            <View style={styles.ratingContainer}>
                <Ionicons name="star" color="gold" size={16} />
                <Text style={styles.ratingText}>{rating.rate}</Text>
                <Text style={styles.reviewsText}>({rating.count} Reviews)</Text>
            </View>
        </View>
    );
};

export default ProductIconComponent;

const styles = StyleSheet.create({
    productContainer: {
        width: 160,
        height: 260,
        padding: 12,
        margin: 8,
        alignItems: "center",
        backgroundColor: Colors.secondarySoftGrey,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 3,
    },
    productImage: {
        width: 120,
        height: 120,
        borderRadius: 8,
        marginBottom: 8,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.primaryNavyBlack,
        marginBottom: 4,
    },
    category: {
        fontSize: 12,
        color: Colors.secondaryHalfGrey,
        marginBottom: 6,
    },
    price: {
        fontSize: 14,
        fontWeight: "500",
        color: Colors.primaryBlueOcean,
        marginBottom: 8,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    ratingText: {
        fontSize: 14,
        color: Colors.primaryNavyBlack,
        fontWeight: "600",
        marginLeft: 4,
    },
    reviewsText: {
        fontSize: 12,
        color: Colors.secondaryHalfGrey,
        marginLeft: 4,
    },
});
