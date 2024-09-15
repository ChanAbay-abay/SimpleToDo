import { StyleSheet } from "react-native";
import Theme from "../Theme";

const currentTheme = Theme.dark;

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent background
    },
    modalContent: {
      width: "80%",
      padding: 24,
      backgroundColor: currentTheme.backgroundColor,
      borderWidth: 2,
      borderColor: "orange",
      borderRadius: 24,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: "900",
      marginBottom: 10,
      color: "white"
    },
    input: {
      borderBottomWidth: 1,
      borderColor: "#ccc",
      marginBottom: 15,
      padding: 10,
      color: "white"
    },
    button: {
      backgroundColor: "orange",
      padding: 10,
      borderRadius: 8,
      marginVertical: 5,
    },
    buttonText: {
      color: "white",
      textAlign: "center",
      fontWeight: "900",
      fontSize: 16,
    },
  });

export default styles;
