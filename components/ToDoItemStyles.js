import { StyleSheet } from "react-native";
import Theme from "../Theme"; // Import theme

const currentTheme = Theme.dark; // Set to dark mode by default

const styles = StyleSheet.create({
  taskContainer: {
    padding: 10,
    backgroundColor: currentTheme.backgroundColor,
    borderWidth: 1,
    borderColor: currentTheme.textColor, //temp
    flexDirection: "row",
  },
  checkbox: {
    width: 35,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  taskContent: {
    flex: 1,
    marginLeft: 15,
  },
  taskTitle: {
    color: currentTheme.textColor,
    fontSize: 18,
  },
  taskDesc: {
    fontSize: 14,
    color: currentTheme.textColor,
  },
  dateDue: {
    color: currentTheme.textColor,
    fontSize: 14,
  },
});

export default styles;
