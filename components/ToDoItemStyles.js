import { StyleSheet } from "react-native";
import Theme from "../Theme";

const currentTheme = Theme.dark;

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
  checkboxText: {
    color: "white",
    fontSize: 18,
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
  completed: {
    backgroundColor: "#f0f0f0",
    borderColor: "#d0d0d0",
  },
  completedText: {
    color: "#a0a0a0",
    textDecorationLine: "line-through",
  },
});

export default styles;
