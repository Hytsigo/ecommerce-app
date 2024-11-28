import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SvgProps } from "react-native-svg";
import { Colors } from "../constants/globalStyles";
import { useRouter } from "expo-router";

interface CategoryIconComponentProps {
    Icon: React.FC<SvgProps>;
    name: string;
    backgroundColor: string;
    categoryId: string;
}

const CategoryIconComponent: React.FC<CategoryIconComponentProps> = ({
    Icon,
    name,
    backgroundColor,
    categoryId,
}) => {
    const router = useRouter();

    const handlePress = () => {
        router.push(`/category/${categoryId}`);
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <View style={[styles.iconWrapper, { backgroundColor }]}>
                <Icon />
            </View>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    );
};

export default CategoryIconComponent;

const styles = StyleSheet.create({
    container: {
        margin: 14,
        alignItems: "center",
        gap: 8,
    },
    iconWrapper: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 14,
        color: Colors.secondaryHalfGrey,
    },
});
