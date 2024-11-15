import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SvgProps } from "react-native-svg";
import { Colors } from "../constants/globalStyles";

interface CategoryIconComponentProps {
    Icon: React.FC<SvgProps>;
    name: string;
    backgroundColor: string;
}

const CategoryIconComponent: React.FC<CategoryIconComponentProps> = ({
    Icon,
    name,
    backgroundColor,
}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.iconWrapper, { backgroundColor }]}>
                <Icon />
            </View>
            <Text style={styles.text}>{name}</Text>
        </View>
    );
};

export default CategoryIconComponent;

const styles = StyleSheet.create({
    container: {
        margin: 16,
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
