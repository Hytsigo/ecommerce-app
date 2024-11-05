import React, { useCallback } from "react";
import { View, StyleSheet, StatusBar, useColorScheme } from "react-native";
import { ThemedIcon } from "@/components/ThemedIcon";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { ThemedView } from "./ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";

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
                backgroundColor: "#ffffff",
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
                    lightColor="#000000"
                    darkColor="#000000"
                />
                <ThemedIcon
                    name="cart-outline"
                    lightColor="#000000"
                    darkColor="#000000"
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
        color: "#3669C9",
        fontSize: 18,
        fontWeight: "700",
        fontStyle: "normal",
    },
});
