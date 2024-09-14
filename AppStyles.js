import { StyleSheet } from "react-native";
import Theme from "./Theme"; // Import theme

const currentTheme = Theme.dark; // Set to dark mode by default

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: currentTheme.backgroundColor,
  },
  wrappercontainer: {
    marginHorizontal: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "orange",
    marginBottom: 10,
  },
  text: {
    color: currentTheme.textColor,
    fontSize: 18,
  },
});

export default styles;
