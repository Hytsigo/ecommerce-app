import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import CustomButton from "@/components/Custombutton";
import { GlobalStyles, Colors } from "./../../constants/globalStyles";

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const signIn = async () => {
        try {
            const authUser = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            await AsyncStorage.setItem("userToken", authUser.user.uid);
            router.replace("/(tabs)");
        } catch (error: any) {
            setError(error.message);
        }
    };

    const signUp = async () => {
        try {
            const authUser = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            await AsyncStorage.setItem("userToken", authUser.user.uid);
            router.replace("/(tabs)");
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <SafeAreaView style={GlobalStyles.container}>
            <Text style={GlobalStyles.title}>Welcome back to Mega Mall</Text>
            {error && <Text style={styles.errorText}>{error}</Text>}

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={Colors.secondaryHalfGrey}
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={Colors.secondaryHalfGrey}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
            </View>

            <Text style={styles.forgotPasswordText}>Forgot password?</Text>

            <View style={styles.buttonContainer}>
                <CustomButton
                    text="Instant"
                    onPress={() => router.replace("/(tabs)")}
                    color={"gray"}
                />
                <CustomButton
                    text="Sign In"
                    onPress={signIn}
                    color={"oceanBlue"}
                />
                <CustomButton text="Sign Up" onPress={signUp} color={"gray"} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "90%",
        maxWidth: 480,
        paddingHorizontal: 16,
        gap: 10,
    },
    input: {
        height: 56,
        paddingHorizontal: 16,
        backgroundColor: Colors.secondarySoftGrey,
        borderColor: Colors.secondaryOffGrey,
        borderWidth: 1,
        borderRadius: 12,
        color: Colors.primaryNavyBlack,
    },
    forgotPasswordText: {
        color: Colors.primaryBlueOcean,
        fontSize: 14,
        marginTop: 10,
        textDecorationLine: "underline",
        alignSelf: "center",
    },
    buttonContainer: {
        width: "90%",
        maxWidth: 480,
        marginTop: 20,
        gap: 10,
    },
    errorText: {
        color: "red",
        textAlign: "center",
        marginBottom: 10,
    },
});
