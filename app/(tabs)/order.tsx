import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/globalStyles";
import React from "react";
import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const order = () => {
    return (
        <ScrollView contentContainerStyle={styles.ordersContainer}>
            {orders.map((order, index) => (
                <View key={index} style={styles.order}>
                    <ImageBackground
                        source={{ uri: order.image }}
                        style={styles.orderImage}
                        imageStyle={styles.orderImageRounded}
                    />
                    <View style={styles.orderDetails}>
                        <Text style={styles.orderNumber}>
                            Order number: {order.number}
                        </Text>
                        <Text style={styles.orderInfo}>
                            Order date: {order.date}
                        </Text>
                        <Text style={styles.orderInfo}>
                            Total: ${order.total}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.trackButton}>
                        <Text style={styles.trackButtonText}>Track Order</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
};

export default order;

const orders = [
    {
        image: "https://cdn.usegalileo.ai/stability/0e145f63-21d7-4924-8ff4-859d67ed77df.png",
        number: "NFDYGS",
        date: "11/08/23",
        total: 985,
    },
    {
        image: "https://cdn.usegalileo.ai/stability/3dca6639-58d6-4a8c-a239-e45faaacdbad.png",
        number: "394KRD",
        date: "24/03/22",
        total: 487,
    },
    {
        image: "https://cdn.usegalileo.ai/stability/accdb901-a4d8-45bd-8e83-4440db453acc.png",
        number: "HCU778",
        date: "1/10/22",
        total: 392,
    },
    {
        image: "https://cdn.usegalileo.ai/stability/52206cae-7735-49ba-b0d0-057738f65dec.png",
        number: "X78FJT",
        date: "21/05/21",
        total: 392,
    },
];

const footerItems = [
    { icon: "🏠", label: "Home" },
    { icon: "🔍", label: "Search" },
    { icon: "#️⃣", label: "Explore" },
];

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f8fafc" },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
    },
    iconContainer: {
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#0d151c",
        textAlign: "center",
    },
    tabs: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#cedde8",
    },
    tab: { flex: 1, paddingVertical: 16, alignItems: "center" },
    tabActive: { borderBottomWidth: 3, borderBottomColor: "#2094f3" },
    tabInactive: { borderBottomWidth: 3, borderBottomColor: "transparent" },
    tabTextActive: { color: "#0d151c", fontWeight: "bold" },
    tabTextInactive: { color: "#49779c", fontWeight: "bold" },
    ordersContainer: { padding: 16 },
    order: { flexDirection: "row", marginBottom: 16, alignItems: "center" },
    orderImage: { width: 70, height: 93 },
    orderImageRounded: { borderRadius: 8 },
    orderDetails: { flex: 1, marginLeft: 16 },
    orderNumber: { fontSize: 16, fontWeight: "500", color: "#0d151c" },
    orderInfo: { fontSize: 14, color: "#49779c" },
    trackButton: {
        backgroundColor: "#e7eef4",
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    trackButtonText: { fontSize: 14, color: "#0d151c" },
    footer: {
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "#e7eef4",
        paddingVertical: 8,
    },
    footerItem: { flex: 1, alignItems: "center" },
    footerText: { fontSize: 12, color: "#49779c" },
});
