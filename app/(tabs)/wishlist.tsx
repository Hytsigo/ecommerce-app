import { Colors } from "@/constants/globalStyles";
import React from "react";
import {
    View,
    Text,
    FlatList,
    ImageBackground,
    StyleSheet,
} from "react-native";

const wishlist = () => {
    const items = [
        {
            id: 1,
            title: "Cotton blend summer dress",
            price: "$284",
            image: "https://cdn.usegalileo.ai/stability/02f9f3d8-7070-4c4a-9a0e-a1fc3b4b55c5.png",
        },
        {
            id: 2,
            title: "Double-breasted Jacket",
            price: "$352",
            image: "https://cdn.usegalileo.ai/stability/e7a0a7ae-75fe-4020-9b5d-3a83a25cf3d5.png",
        },
        {
            id: 3,
            title: "Single-breasted blazer",
            price: "$524",
            image: "https://cdn.usegalileo.ai/stability/90fd6335-d4b0-42e5-b114-1d689eb2ac72.png",
        },
        {
            id: 4,
            title: "AirPods Pro",
            price: "$249",
            image: "https://cdn.usegalileo.ai/stability/7784cb6f-7420-4bf0-bf63-b5a5fdd82f19.png",
        },
        {
            id: 5,
            title: "Beoplay E8 Earphones",
            price: "$299",
            image: "https://cdn.usegalileo.ai/stability/a799bf9b-4626-4312-b446-8dac781d4a2a.png",
        },
        {
            id: 6,
            title: "Sony Wireless Headphone",
            price: "$399",
            image: "https://cdn.usegalileo.ai/stability/71123cb1-9bf7-4a14-ab4c-410830316cd1.png",
        },
    ];

    const renderItem = ({ item }: any) => (
        <View style={styles.card}>
            <ImageBackground
                source={{ uri: item.image }}
                style={styles.cardImage}
                imageStyle={{ borderRadius: 8 }}
            />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardPrice}>{item.price}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.grid}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default wishlist;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondaryOffGrey,
    },
    grid: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    card: {
        flex: 1,
        margin: 8,
        backgroundColor: Colors.primaryPureWhite,
        borderRadius: 8,
        shadowColor: Colors.secondaryHalfGrey,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cardImage: {
        height: 150,
    },
    cardTitle: {
        marginTop: 8,
        fontWeight: "600",
        color: Colors.primaryNavyBlack,
        paddingHorizontal: 8,
    },
    cardPrice: {
        color: Colors.primaryBlueOcean,
        fontWeight: "bold",
        paddingHorizontal: 8,
        marginBottom: 8,
    },
});
