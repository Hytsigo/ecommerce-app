import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CategoryIconComponent from "./CategotieIconComponent";
import CarrotSvg from "@/assets/svg/CarrotSvg";
import FruitsSvg from "@/assets/svg/FuitsSvg";
import EggsSvg from "@/assets/svg/EggsSvg";
import SteakSvg from "@/assets/svg/SteakSvg";

interface Category {
    id: string;
    name: string;
    Icon: any;
    backgroundColor: string;
}

const categories: Category[] = [
    {
        id: "electronics",
        name: "Electronics",
        Icon: CarrotSvg,
        backgroundColor: "#E4F3EA",
    },
    {
        id: "jewelery",
        name: "Jewelery",
        Icon: FruitsSvg,
        backgroundColor: "#FFECE8",
    },
    {
        id: "men's clothing",
        name: "Men's",
        Icon: EggsSvg,
        backgroundColor: "#FFF6E4",
    },
    {
        id: "women's clothing",
        name: "Women's",
        Icon: SteakSvg,
        backgroundColor: "#F1EDFC",
    },
];

interface AllCategoriesProps {
    isExpanded: boolean;
}

const AllCategories: React.FC<AllCategoriesProps> = ({ isExpanded }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={isExpanded ? categories : categories.slice(0, 4)}
                keyExtractor={(item) => item.id.toString()}
                numColumns={4}
                renderItem={({ item }) => (
                    <CategoryIconComponent
                        Icon={item.Icon}
                        backgroundColor={item.backgroundColor}
                        name={item.name}
                        categoryId={item.id}
                    />
                )}
            />
        </View>
    );
};

export default AllCategories;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
});
