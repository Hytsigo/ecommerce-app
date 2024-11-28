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
    View,
} from "react-native";
import { Colors } from "../constants/globalStyles";
import ProductIconComponent from "./ProductIconComponent";
import ModalComponent from "./ModalComponent";

interface ModalComponentProps {
    isVisible: boolean;
    onClose: () => void;
    productTitle?: string;
}

interface AllProductsProps {
    isExpanded: boolean;
}

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;
const itemWidth = screenWidth / numColumns - 20;

const AllProductsComponent: React.FC<AllProductsProps> = ({ isExpanded }) => {
    const [products, setProducts] = useState<Welcome[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<Welcome | null>(
        null
    );

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const handleLongPress = (item: Welcome) => {
        setSelectedProduct(item);
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
        setSelectedProduct(null);
    };

    const renderItem = ({ item }: { item: Welcome }) => (
        <Link
            href={{
                pathname: `/detail/[id]`,
                params: { id: item.id },
            }}
            asChild
        >
            <TouchableOpacity onLongPress={() => handleLongPress(item)}>
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
        <View style={styles.container}>
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

            <ModalComponent
                isVisible={isModalVisible}
                onClose={handleCloseModal}
                productTitle={selectedProduct?.title}
            />
        </View>
    );
};

export default AllProductsComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.secondaryOffGrey,
    },
    flatListContainer: {
        padding: 10,
        justifyContent: "center",
    },
});
