import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

const saveUserToStorage = async (user: any) => {
    try {
        await AsyncStorage.setItem("userToken", JSON.stringify(user));
    } catch (e) {
        console.error("Error saving user", e);
    }
};

onAuthStateChanged(auth, (user) => {
    if (user) {
        saveUserToStorage(user);
    } else {
        AsyncStorage.removeItem("userToken");
    }
});
