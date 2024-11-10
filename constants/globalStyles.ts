import { StyleSheet } from "react-native";

const Colors = {
    primaryBlueOcean: "#3669C9",
    primaryOrangeFresh: "#FDA429",
    primaryNavyBlack: "#13181F",
    primaryPureWhite: "#FFFFFF",

    secondaryEarthGreen: "#3A9B7A",
    secondaryRedVelvet: "#C93545",
    secondaryDarkGrey: "#FAFAFA",
    secondaryHalfGrey: "#838589",
    secondarySoftGrey: "#EDEDED",
    secondaryOffGrey: "#FAFAFA",

    labelOffBlue: "#EFF5FB",
    labelOffGreen: "#EEFAF6",
    labelOffRed: "#FCECEF",
};

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondaryOffGrey,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        color: Colors.primaryNavyBlack,
        fontWeight: "bold",
    },
    text: {
        fontSize: 16,
        color: Colors.secondaryHalfGrey,
    },
    button: {
        backgroundColor: Colors.primaryBlueOcean,
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: Colors.primaryPureWhite,
        fontWeight: "bold",
    },
    errorText: {
        color: Colors.secondaryRedVelvet,
    },
    label: {
        backgroundColor: Colors.labelOffBlue,
        padding: 8,
        borderRadius: 4,
        color: Colors.primaryNavyBlack,
    },
});

export { Colors, GlobalStyles };
