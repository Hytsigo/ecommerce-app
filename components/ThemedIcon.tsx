import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";

type ThemedIconProps = {
    name: string | any;
    size?: number;
    style?: StyleProp<ViewStyle>;
    lightColor?: string;
    darkColor?: string;
};

export function ThemedIcon({
    name,
    size = 24,
    style,
    lightColor,
    darkColor,
}: ThemedIconProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "icon");

    return <Ionicons name={name} size={size} color={color} style={style} />;
}
