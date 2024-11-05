import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type BannerComponentProps = {
    title: string;
    subtitle: string;
    backgroundColor?: string;
    SvgComponent?: React.FC;
};

const BannerArticleComponent: React.FC<BannerComponentProps> = ({
    title,
    subtitle,
    backgroundColor = "#3669C9",
    SvgComponent,
}) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.row}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.shopNow}>
                        <Text style={styles.subtitle}>{subtitle}</Text>
                        <Ionicons name="arrow-forward" color="#fff" size={20} />
                    </View>
                </View>
                {SvgComponent && <SvgComponent />}
            </View>
        </View>
    );
};

export default BannerArticleComponent;

const styles = StyleSheet.create({
    container: {
        width: 325,
        height: 150,
        borderRadius: 10,
        paddingHorizontal: 24,
        paddingVertical: 20,
        justifyContent: "center",
        marginHorizontal: 20,
    },
    row: {
        flexDirection: "row",
    },
    textContainer: {
        alignItems: "flex-start",
        justifyContent: "center",
        width: 150,
        gap: 10,
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "700",
        textAlign: "left",
    },
    shopNow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    subtitle: {
        color: "#fff",
        opacity: 0.5, // Cambié a 0.5 en lugar de 50, ya que 50 no es válido
    },
});
