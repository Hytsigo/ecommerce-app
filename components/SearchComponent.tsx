import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const SearchComponent = () => {
    const [text, onChangeText] = useState("");
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Search Product Name"
                onChangeText={onChangeText}
                value={text}
                maxLength={30}
                placeholderTextColor="grey"
            />
            <Ionicons name="search" size={20} />
        </View>
    );
};

export default SearchComponent;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 15,
        borderRadius: 5,
        width: 325,
        height: 50,
        justifyContent: "space-between",
        alignContent: "center",
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#ededed",
        alignSelf: "center",
    },
});
