import React, { useEffect, useState } from "react";
import { Stack, usePathname, useRouter } from "expo-router";
import { useColorScheme } from "react-native";
import {
    ThemeProvider,
    DarkTheme,
    DefaultTheme,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import TabBarComponent from "@/components/TabBarComponent";

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
            </Stack>
        </ThemeProvider>
    );
}
