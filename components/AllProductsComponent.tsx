import { getProducts } from "@/api/getProducts.service";
import { Welcome } from "@/interfaces/productInterfaces";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import { Colors } from "../constants/globalStyles";
import ProductIconComponent from "./ProductIconComponent";

interface AllProductsProps {
    isExpanded: boolean;
}

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;
const itemWidth = screenWidth / numColumns - 20;

const AllProductsComponent: React.FC<AllProductsProps> = ({ isExpanded }) => {
    const [products, setProducts] = useState<Welcome[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
            setLoading(false);
        };

        fetchProducts();
    }, []);

    const renderItem = ({ item }: { item: Welcome }) => (
        <Link
            href={{
                pathname: `/detail/[id]`,
                params: { id: item.id },
            }}
            asChild
        >
            <TouchableOpacity
                style={[styles.productContainer, { width: itemWidth }]}
            >
                <ProductIconComponent
                    price={item.price}
                    rating={item.rating}
                    title={item.title}
                    category={item.category}
                    description={item.description}
                    id={item.id}
                    image={item.image}
                />
            </TouchableOpacity>
        </Link>
    );

    return (
        <FlatList
            data={isExpanded ? products : products.slice(0, 2)}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns}
            contentContainerStyle={styles.flatListContainer}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
                !loading ? <Text>No products found</Text> : null
            }
        />
    );
};

export default AllProductsComponent;

const styles = StyleSheet.create({
    flatListContainer: {
        padding: 10,
        justifyContent: "center",
    },
    productContainer: {
        margin: 10,
        backgroundColor: Colors.secondaryOffGrey,
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: "center",
        gap: 5,
        shadowColor: Colors.primaryNavyBlack,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
});
