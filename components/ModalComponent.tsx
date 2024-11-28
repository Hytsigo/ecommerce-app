import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/globalStyles";

interface ModalComponentProps {
    isVisible: boolean;
    onClose: () => void;
    productTitle?: string;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
    isVisible,
    onClose,
    productTitle,
}) => {
    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>
                        You long-pressed on: {productTitle || "No product"}
                    </Text>
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={onClose}
                    >
                        <Text style={styles.modalButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default ModalComponent;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semi-transparente
    },
    modalContent: {
        backgroundColor: Colors.primaryPureWhite,
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: Colors.primaryNavyBlack,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        fontSize: 18,
        color: Colors.primaryNavyBlack,
        marginBottom: 10,
    },
    modalButton: {
        backgroundColor: Colors.primaryBlueOcean,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    modalButtonText: {
        color: Colors.primaryPureWhite,
        fontWeight: "bold",
    },
});
