import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ExpandableSectionProps {
    title: string;
    children: React.ReactNode; // El contenido del componente que siempre estará renderizado
    expandedContent: React.ReactNode; // El contenido que se expandirá o colapsará
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({
    title,
    children,
    expandedContent,
}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.sectionTitle}>{title}</Text>
                <TouchableOpacity onPress={toggleExpand}>
                    <Text style={styles.toggleText}>
                        {isExpanded ? "Close" : "See All"}
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Este es el componente principal que siempre estará visible */}
            <View style={styles.alwaysVisibleContent}>{children}</View>

            {/* Este es el contenido que se expandirá o colapsará */}
            {isExpanded && (
                <View style={styles.expandedContent}>{expandedContent}</View>
            )}
        </View>
    );
};

export default ExpandableSection;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: "#fff",
        marginVertical: 10,
        padding: 10,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        marginBottom: 16,
        alignItems: "center",
    },
    sectionTitle: {
        color: "#0c1a30",
        fontWeight: "500",
        fontSize: 16,
    },
    toggleText: {
        color: "#3669C9",
        fontWeight: "500",
        fontSize: 12,
    },
    alwaysVisibleContent: {
        paddingBottom: 10,
        alignItems: "center",
    },
    expandedContent: {
        paddingTop: 10,
        alignItems: "center",
    },
});
