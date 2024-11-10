import CustomButton from "@/components/Custombutton";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/globalStyles";
import { router } from "expo-router";
import { signOut } from "firebase/auth";
import React from "react";
import { StyleSheet, View } from "react-native";
import { auth } from "../../firebase";

const Account = () => {
    const handleSignOut = async () => {
        try {
            await signOut(auth);
            router.replace("/(auth)");
        } catch (error) {
            console.error("Error closing session:", error);
        }
    };

    const user = auth.currentUser;

    return (
        <View style={styles.container}>
            {user ? (
                <View style={styles.profileContainer}>
                    <ThemedText style={styles.email}>{user.email}</ThemedText>
                </View>
            ) : (
                <ThemedText style={styles.error}>
                    No hay información de usuario disponible
                </ThemedText>
            )}
            <CustomButton text="Sign Out" onPress={handleSignOut} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: Colors.secondaryOffGrey,
    },
    profileContainer: {
        marginBottom: 20,
        alignItems: "center",
    },
    email: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.primaryNavyBlack,
    },
    error: {
        fontSize: 16,
        color: Colors.secondaryRedVelvet,
    },
});

export default Account;
