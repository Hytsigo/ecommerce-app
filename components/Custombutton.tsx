import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface CustomButtonProps {
    color?: "oceanBlue" | "white" | "gray";
    size?: "small" | "medium" | "large";
    text?: string;
    onPress: () => void;
}

const colors = {
    oceanBlue: "#4D7FFF",
    white: "#FFFFFF",
    gray: "#bdc3c9",
};

const sizes = {
    small: { width: 100, height: 30 },
    medium: { width: 275, height: 50 },
    large: { width: 325, height: 50 },
};

const CustomButton: React.FC<CustomButtonProps> = ({
    color = "oceanBlue",
    size = "large",
    text = "Hola",
    onPress,
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.button,
                    {
                        backgroundColor: colors[color],
                        ...sizes[size],
                        borderWidth: color === "white" ? 1 : 0,
                        borderColor: color === "white" ? "#000" : "transparent",
                    },
                ]}
                onPress={onPress}
            >
                <Text
                    style={[
                        styles.text,
                        { color: color === "white" ? "#000" : "#FFF" },
                    ]}
                >
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: "500",
    },
});
