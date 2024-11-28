import { WishlistProvider } from "@/context/WishlistContext";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme } from "react-native";

export default function RootLayout() {
    const colorScheme = useColorScheme();
    return (
        <ThemeProvider
            value={colorScheme === "dark" ? DefaultTheme : DefaultTheme}
        >
            <StatusBar style="dark" />
            <Stack>
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen
                    name="detail/[id]"
                    options={{
                        title: "Detail Product",
                        headerBackTitle: "Home",
                    }}
                />
                <Stack.Screen
                    name="category/[id]"
                    options={{
                        title: "Categories",
                        headerBackTitle: "Home",
                    }}
                />
            </Stack>
        </ThemeProvider>
    );
}
