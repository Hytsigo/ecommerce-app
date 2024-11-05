import React from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import ProductIconComponent from "./ProductIconComponent";
import HeadphonesSvg from "@/assets/svg/HeadphonesSvg";
import SvgCable from "@/assets/svg/SvgCable";

interface allProducts {
    isExpanded: boolean;
}
// Definimos la interfaz para los productos
interface Product {
    id: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    price: number;
    rating: number;
    reviews: number;
    title: string;
}

// Definimos el array de productos con sus respectivas propiedades
const data: Product[] = [
    {
        id: "1",
        Icon: HeadphonesSvg,
        price: 1500000,
        rating: 4.6,
        reviews: 90,
        title: "TMA-2 HD Wireless",
    },
    {
        id: "2",
        Icon: SvgCable,
        price: 1900000,
        rating: 3.6,
        reviews: 180,
        title: "TMA-1 HD Cable",
    },
    {
        id: "3",
        Icon: HeadphonesSvg,
        price: 1500000,
        rating: 4.6,
        reviews: 90,
        title: "TMA-2 HD Wireless",
    },
    {
        id: "4",
        Icon: HeadphonesSvg,
        price: 1500000,
        rating: 4.6,
        reviews: 90,
        title: "TMA-2 HD Wireless",
    },
];

// Número de columnas basado en el tamaño de la pantalla
const numColumns = 2;
const screenWidth = Dimensions.get("window").width;
const itemWidth = screenWidth / numColumns - 20; // Ajusta el espaciado

const AllProductsComponent: React.FC<allProducts> = ({ isExpanded }) => {
    // Renderizado de cada elemento
    const renderItem = ({ item }: { item: Product }) => (
        <View style={[styles.productContainer, { width: itemWidth }]}>
            <ProductIconComponent
                Icon={item.Icon}
                price={item.price}
                rating={item.rating}
                reviews={item.reviews}
                title={item.title}
            />
        </View>
    );

    return (
        <FlatList
            data={isExpanded ? data : data.slice(0, 2)}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={numColumns}
            contentContainerStyle={styles.flatListContainer}
            showsVerticalScrollIndicator={false}
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
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: "center",
        gap: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
});
