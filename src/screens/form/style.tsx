import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



export const styles = StyleSheet.create({
    subContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
        height: 100,
        marginBottom: 24

    },
    imagem: {
        width: RFValue(200),
        height: RFValue(100),

    },
    Title: {
        fontSize: RFValue(32),
        fontWeight: 700,
        color: "#333333",
        alignItems: "center",
        alignContent: "center",
        textAlign: "center"
    },
    subTitile: {
        fontSize: RFValue(14),
        fontWeight: 600,
        color: "#333333"
    },
        textInstructions: {
        fontSize: 24,
        fontWeight: 600,
        color: "#FFFFFF",
        textAlign:"center"
    },
    containerInstructions:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#de8328",
        borderRadius:10,
        padding: 16
    },
    containerButton:{
        flexDirection: "row",
        justifyContent: "center",
        width: '100%',
        height: 100,
        marginBottom: 24

    }

})
