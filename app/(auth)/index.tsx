import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "@/components/Custombutton";
import { router } from "expo-router";

export default function Login({ navigation }: any) {
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
            router.push("/(tabs)");
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
            router.push("/(tabs)");
        } catch (error: any) {
            setError(error.mesage);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome back to Mega Mall</Text>
                {error && <Text style={styles.errorText}>{error}</Text>}
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
                <CustomButton
                    text="Instant"
                    onPress={() => router.push("/(tabs)")}
                />
                <CustomButton text="Sign In" onPress={signIn} />
                <CustomButton text="Sign Up" onPress={signUp} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    content: { width: 325, marginTop: 150, gap: 32, textAlign: "left" },
    title: { fontWeight: "700", fontSize: 25, lineHeight: 33 },
    input: {
        marginVertical: 10,
        height: 50,
        paddingHorizontal: 16,
        backgroundColor: "#ededed",
        borderRadius: 5,
    },
    footerText: { marginTop: 20, color: "blue" },
    errorText: { color: "red", textAlign: "center" },
});
