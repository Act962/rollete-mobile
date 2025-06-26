import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#A06101",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        padding: 20, // mantém espaçamento interno
        // Remover height fixa
        alignSelf: "flex-start" // impede de esticar se o pai permitir
    },
    title: {
        color: "#FFFFFF",
        fontSize: RFValue(16),
        fontWeight: "600"
    }
});
