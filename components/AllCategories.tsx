import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CategoryIconComponent from "./CategotieIconComponent";
import CarrotSvg from "@/assets/svg/CarrotSvg";
import FruitsSvg from "@/assets/svg/FuitsSvg";
import EggsSvg from "@/assets/svg/EggsSvg";
import SteakSvg from "@/assets/svg/SteakSvg";

interface Category {
    id: number;
    name: string;
    Icon: any;
    backgroundColor: string;
}

const categories: Category[] = [
    { id: 1, name: "Foods", Icon: CarrotSvg, backgroundColor: "#E4F3EA" },
    { id: 2, name: "Gift", Icon: FruitsSvg, backgroundColor: "#FFECE8" },
    { id: 3, name: "Fashion", Icon: EggsSvg, backgroundColor: "#FFF6E4" },
    { id: 4, name: "Gadget", Icon: SteakSvg, backgroundColor: "#F1EDFC" },
    { id: 5, name: "Computer", Icon: CarrotSvg, backgroundColor: "#E4F3EA" },
    { id: 6, name: "Souvenir", Icon: FruitsSvg, backgroundColor: "#FFECE8" },
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
