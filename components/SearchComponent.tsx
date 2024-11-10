import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../constants/globalStyles";

interface Props {
    onSearch: (query: string) => void;
}
const SearchComponent: React.FC<Props> = ({ onSearch }) => {
    const [text, setText] = useState("");

    const handleChage = (value: string) => {
        setText(value);
        onSearch(value);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Search Product Name"
                onChangeText={handleChage}
                value={text}
                maxLength={30}
                placeholderTextColor={Colors.secondaryHalfGrey}
            />
            <Ionicons name="search" size={20} color={Colors.primaryBlueOcean} />
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
        backgroundColor: Colors.secondarySoftGrey,
        alignSelf: "center",
        marginBottom: 15,
    },
});
