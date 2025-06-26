import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
      wrapper: {
    width: "100%",
  },
    input: {
        color:"#333333",
        fontSize: RFValue(12),
        fontWeight: 600,
        borderWidth: 1,
        borderRadius: 20,
        borderColor:"#D88200",
        padding: 10,
        width: "100%",
        minHeight: 55,

    },
    inputFocused: {
    borderColor: "#A26201"
    }
})