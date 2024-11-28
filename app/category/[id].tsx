import { getProductsByCategory } from "@/api/getProducts.service";
import { ProductComponent } from "@/components/ProductComponent";
import { Welcome } from "@/interfaces/productInterfaces";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

const CategoryProductsComponent = () => {
    const { id: categoryId } = useLocalSearchParams<{ id: string }>();
    const [products, setProducts] = useState<Welcome[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsByCategory = await getProductsByCategory(categoryId);
            setProducts(productsByCategory);
        };

        fetchProducts();
    }, [categoryId]);

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ProductComponent product={item} />}
                numColumns={2}
                contentContainerStyle={styles.list}
                key={`category-${categoryId}`}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    list: {
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
});

export default CategoryProductsComponent;
