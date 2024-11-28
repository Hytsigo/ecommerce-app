import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/globalStyles";
import { Welcome } from "@/interfaces/productInterfaces";
import { getProducts } from "@/api/getProducts.service";
import { Link } from "expo-router";

const BannerArticleComponent: React.FC = ({}) => {
    const [product, setProduct] = useState<Welcome | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const products = await getProducts();
            if (products.length > 0) {
                const randomProduct =
                    products[Math.floor(Math.random() * products.length)];
                setProduct(randomProduct);
            }
        };

        fetchProduct();
    }, []);

    if (!product) return null;
    return (
        <Link href={{ pathname: "/detail/[id]", params: { id: product.id } }}>
            <View style={[styles.container, { backgroundColor: "#0acf83" }]}>
                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>
                            {product.title.length > 20
                                ? `${product.title.substring(0, 20)}...`
                                : product.title}
                        </Text>
                        <View style={styles.shopNow}>
                            <Text style={styles.subtitle}>Shop now</Text>
                            <Ionicons
                                name="arrow-forward"
                                color={Colors.primaryBlueOcean}
                                size={20}
                            />
                        </View>
                    </View>
                    <Image
                        source={{ uri: product.image }}
                        style={styles.image}
                    />
                </View>
            </View>
        </Link>
    );
};

export default BannerArticleComponent;

const styles = StyleSheet.create({
    container: {
        width: 325,
        height: 150,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
    },
    textContainer: {
        alignItems: "flex-start",
        justifyContent: "center",
        width: 150,
        gap: 10,
    },
    title: {
        color: Colors.primaryNavyBlack,
        fontSize: 20,
        fontWeight: "700",
        textAlign: "left",
    },
    shopNow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    subtitle: {
        color: Colors.primaryBlueOcean,
        fontWeight: "800",
        opacity: 0.5,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
});
