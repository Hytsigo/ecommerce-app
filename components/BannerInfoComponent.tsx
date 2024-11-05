import { Image, StyleSheet, Text, View, ImageStyle } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface TestBannerComponentProps {
    title: string;
    subtitle: string;
    imageSource: any;
    backgroundColor: string;
    imageStyle?: ImageStyle;
}

const TestBannerComponent: React.FC<TestBannerComponentProps> = ({
    title,
    subtitle,
    imageSource,
    backgroundColor,
    imageStyle,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image
                    source={imageSource}
                    style={[styles.image, imageStyle]}
                />
            </View>
            <View style={[styles.textWrapper, { backgroundColor }]}>
                <View style={styles.textContainer}>
                    <View style={styles.firstTextContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <View style={styles.shopNow}>
                            <Text style={styles.shopNowText}>{subtitle}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default TestBannerComponent;

const styles = StyleSheet.create({
    container: {
        width: 325,
        height: 150,
        flexDirection: "row",
        borderRadius: 10,
        overflow: "hidden",
    },
    textWrapper: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        justifyContent: "center",
        position: "absolute",
        width: 190,
        height: 150,
        borderTopEndRadius: 100,
        borderBottomEndRadius: 100,
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "700",
        textAlign: "left",
    },
    textContainer: {
        flexDirection: "row",
    },
    imageWrapper: {
        alignItems: "flex-end",
        flex: 1,
        borderRadius: 10,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    shopNow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    firstTextContainer: {
        alignItems: "flex-start",
        justifyContent: "center",
        width: 150,
        gap: 10,
    },
    shopNowText: {
        color: "#fff",
        opacity: 0.5,
    },
});
