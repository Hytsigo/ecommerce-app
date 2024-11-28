import { Colors } from "@/constants/globalStyles";
import { Welcome } from "@/interfaces/productInterfaces";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const ProductComponent: React.FC<{ product: Welcome }> = ({
    product,
}) => (
    <Link
        href={{
            pathname: `/detail/[id]`,
            params: { id: product.id },
        }}
        asChild
    >
        <TouchableOpacity>
            <View style={styles.productContainer}>
                <Image
                    source={{ uri: product.image }}
                    style={styles.productImage}
                />
                <Text style={styles.title}>
                    {product.title.length > 20
                        ? `${product.title.substring(0, 20)}...`
                        : product.title}
                </Text>
                <Text style={styles.category}>{product.category}</Text>
                <Text style={styles.price}>
                    COL: ${product.price.toLocaleString("es-CO")}
                </Text>
                <View style={styles.ratingContainer}>
                    <Ionicons name="star" color="gold" size={16} />
                    <Text style={styles.ratingText}>{product.rating.rate}</Text>
                    <Text style={styles.reviewsText}>
                        {product.rating.count} Reviews
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    </Link>
);

const styles = StyleSheet.create({
    productContainer: {
        width: 160,
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
