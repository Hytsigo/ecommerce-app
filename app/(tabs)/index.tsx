import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import home from "../../components/HomeComponent";
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={home}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>{item.component}</View>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    item: {
        marginBottom: 25,
    },
});
