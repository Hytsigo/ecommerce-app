import { Colors } from "@/constants/globalStyles";
import { Welcome } from "@/interfaces/productInterfaces";
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export const ProductComponent: React.FC<{ product: Welcome }> = ({
    product,
}) => (
    <View style={styles.productContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.rating}>Rating: {product.rating.rate}</Text>
    </View>
);

const styles = StyleSheet.create({
    productContainer: {
        margin: 10,
        backgroundColor: Colors.secondaryOffGrey,
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignItems: "center",
        shadowColor: Colors.primaryNavyBlack,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        width: 160,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        color: Colors.primaryNavyBlack,
        textAlign: "center",
        marginVertical: 5,
    },
    category: {
        fontSize: 12,
        color: Colors.secondaryHalfGrey,
        textAlign: "center",
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        fontWeight: "bold",
        color: Colors.primaryBlueOcean,
        textAlign: "center",
    },
    rating: {
        fontSize: 12,
        color: Colors.secondaryHalfGrey,
        textAlign: "center",
    },
});
