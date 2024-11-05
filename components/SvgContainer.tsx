import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import BannerInfoComponent from "./BannerInfoComponent";

const SvgContainer = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <BannerInfoComponent
                    title="Compra 3 y llevas 1 gratis"
                    subtitle="Periodo - octubre 2024"
                    backgroundColor="#3669C9"
                    imageSource={require("@/assets/images/girl.png")}
                    imageStyle={{ width: 221, height: 172 }}
                />
                <BannerInfoComponent
                    title="In all you have a discount of 70%"
                    subtitle="Periode agustus 2024"
                    backgroundColor="#184dad"
                    imageSource={require("@/assets/images/man.png")}
                    imageStyle={{
                        width: 210,
                        height: 154,
                    }}
                />
            </View>
        </ScrollView>
    );
};

export default SvgContainer;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignContent: "center",
        paddingHorizontal: 16,
        gap: 20,
    },
});
