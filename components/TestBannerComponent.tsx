import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const TestBannerComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image source={require("./../assets/images/girl.png")} />
            </View>
            <View style={styles.textWrapper}>
                <View style={styles.textContainer}>
                    <View style={styles.firstTextContainer}>
                        <Text style={styles.title}>Modular Headphone</Text>
                        <View style={styles.shopNow}>
                            <Text style={styles.shopNowText}>Shop now</Text>
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
        backgroundColor: "#3669C9",
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
