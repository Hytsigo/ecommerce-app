import { getProducts } from "@/api/getProducts.service";
import { ProductComponent } from "@/components/ProductComponent";
import SearchComponent from "@/components/SearchComponent";
import { Colors } from "@/constants/globalStyles";
import { Welcome } from "@/interfaces/productInterfaces";
import React, { useEffect, useState } from "react";
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
} from "react-native";
import home from "../../components/HomeComponent";

export default function HomeScreen() {
    const [query, setQuery] = useState<string>("");
    const [products, setProducts] = useState<Welcome[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Welcome[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await getProducts();
            setProducts(fetchedProducts);
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        if (!query || query.trim() === "") {
            setFilteredProducts([]);
        } else {
            const results = products.filter((item) =>
                item.title.toLowerCase().includes(query.trim().toLowerCase())
            );
            setFilteredProducts(results);
        }
    }, [query, products]);

    return (
        <SafeAreaView style={styles.container}>
            <SearchComponent onSearch={(value) => setQuery(value || "")} />

            {query?.trim() === "" ? (
                <FlatList
                    data={home}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>{item.component}</View>
                    )}
                    showsVerticalScrollIndicator={false}
                    key="single-column"
                />
            ) : (
                <FlatList
                    data={filteredProducts.slice(0, 2)}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                alignItems: "center",
                                flex: 1,
                            }}
                        >
                            <ProductComponent product={item} />
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    key="two-columns"
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondaryOffGrey,
    },
    item: {
        marginBottom: 25,
        alignItems: "center",
    },
});
