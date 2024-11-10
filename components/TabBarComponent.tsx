import { ThemedIcon } from "@/components/ThemedIcon";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import React, { useCallback } from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { Colors } from "../constants/globalStyles";

const TabBarComponent = () => {
    const colorScheme = useColorScheme();
    const [fontsLoaded] = useFonts({
        "DM-Sans": require("./../assets/fonts/DMSans-Regular.ttf"),
        "DM-Sans-Bold": require("./../assets/fonts/DMSans-Bold.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ThemedView
            onLayout={onLayoutRootView}
            style={{
                backgroundColor: Colors.secondaryOffGrey,
                flexDirection: "row",
                alignItems: "center",
                borderBottomWidth: 0.2,
                marginTop: 26,
                justifyContent: "center",
                padding: 20,
                position: "relative",
            }}
        >
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={styles.textStyle}>Mega Mall</Text>
            </View>
            <View
                style={{
                    position: "absolute",
                    right: 16,
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <ThemedIcon
                    name="notifications-outline"
                    lightColor={Colors.primaryNavyBlack}
                    darkColor={Colors.primaryNavyBlack}
                />
                <ThemedIcon
                    name="cart-outline"
                    lightColor={Colors.primaryNavyBlack}
                    darkColor={Colors.primaryNavyBlack}
                    style={{ marginLeft: 16 }}
                />
            </View>
        </ThemedView>
    );
};

export default TabBarComponent;

const styles = StyleSheet.create({
    textStyle: {
        textAlign: "center",
        color: Colors.primaryBlueOcean,
        fontSize: 18,
        fontWeight: "700",
        fontStyle: "normal",
    },
});
