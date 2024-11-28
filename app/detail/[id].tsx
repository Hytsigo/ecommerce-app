import { getProducts } from "@/api/getProducts.service";
import CustomButton from "@/components/Custombutton";
import { Colors } from "@/constants/globalStyles";
import { Welcome } from "@/interfaces/productInterfaces";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

const DetailProductScreen = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [product, setProduct] = useState<Welcome | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const products = await getProducts();
            const selectedProducts = products.find(
                (item: Welcome) => item.id === parseInt(id as string, 10)
            );
            setProduct(selectedProducts || null);
        };
        fetchProduct();
    }, [id]);

    if (!product) return <Text>Loading...</Text>;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>
                COL: ${product.price.toLocaleString("es-CO")}
            </Text>
            <View style={styles.ratingContainer}>
                <Ionicons name="star" color="gold" size={16} />
                <Text style={styles.rating}>{product.rating.rate}</Text>
                <Text style={styles.rating}>
                    {product.rating.count} Reviews
                </Text>
            </View>
            <Text style={styles.category}>Category: {product.category}</Text>
            <CustomButton
                onPress={() => {}}
                color="oceanBlue"
                text="Add to cart"
            />
        </ScrollView>
    );
};

export default DetailProductScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        backgroundColor: Colors.secondaryOffGrey,
        paddingBottom: 40,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.primaryNavyBlack,
        marginBottom: 10,
        textAlign: "center",
    },
    description: {
        fontSize: 16,
        color: Colors.secondaryHalfGrey,
        marginBottom: 10,
        textAlign: "center",
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.primaryOrangeFresh,
        marginBottom: 15,
        textAlign: "center",
    },
    ratingContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        gap: 8,
    },
    rating: {
        fontSize: 16,
        color: Colors.primaryNavyBlack,
    },
    category: {
        fontSize: 16,
        color: Colors.secondaryEarthGreen,
        marginBottom: 10,
        textAlign: "center",
    },
    id: {
        fontSize: 16,
        color: Colors.secondaryHalfGrey,
        textAlign: "center",
    },
});
