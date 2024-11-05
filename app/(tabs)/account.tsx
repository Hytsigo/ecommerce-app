import { View, Text } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/Custombutton";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { router } from "expo-router";

const Account = () => {
    const handleSignOut = async () => {
        try {
            await signOut(auth);
            router.replace("/(auth)");
        } catch (error) {
            console.error("Error closing session:", error);
        }
    };

    return (
        <View
            style={{
                flex: 1,
                alignContent: "center",
                justifyContent: "center",
            }}
        >
            <CustomButton text="Sign Out" onPress={handleSignOut} />
        </View>
    );
};

export default Account;
