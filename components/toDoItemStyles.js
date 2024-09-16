import { StyleSheet } from "react-native";
import Theme from "../Theme";

const currentTheme = Theme.dark;

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: currentTheme.backgroundColor,
    borderBottomWidth: 0.5,
    borderColor: "#696773",
    borderRadius: 16,
    alignItems: "center",
  },
  checkboxContainer: {
    width: 50, // Adjust width as needed
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderColor: "#d0d0d0",
    borderWidth: 2,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  checkboxText: {
    color: "#d0d0d0",
    fontSize: 14,
  },
  taskContent: {
    flex: 1,
    marginLeft: 3,
  },
  taskTitle: {
    color: currentTheme.textColor,
    fontSize: 18,
    fontWeight: "500",
    flexWrap: "wrap",
    marginBottom: 3,
  },
  taskDesc: {
    fontSize: 14,
    color: currentTheme.textColor,
    flexWrap: "wrap",
  },
  dateDue: {
    color: currentTheme.textColor,
    fontSize: 12,
    marginTop: 3,
  },
  completed: {
    backgroundColor: "transparent",
    borderColor: "#d0d0d0",
  },
  completedTaskTitle: {
    textDecorationLine: "line-through",
    color: "#a0a0a0",
  },
  completedTaskDesc: {
    textDecorationLine: "line-through",
    color: "#a0a0a0",
  },
  completedDateDue: {
    textDecorationLine: "line-through",
    color: "#a0a0a0",
  },
});

export default styles;
