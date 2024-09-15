import { StyleSheet } from "react-native";
import Theme from "../Theme";

const currentTheme = Theme.dark;

const styles = StyleSheet.create({
  taskContainer: {
    padding: 12,
    backgroundColor: currentTheme.backgroundColor,
    borderWidth: 1,
    borderColor: "white",
    flexDirection: "row",
    borderRadius: 16,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "space-between",
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
  completed: {
    backgroundColor: "transparent",
    borderColor: "#d0d0d0",
  },
  checkboxText: {
    color: "#d0d0d0",
    lineHeight: 17,
    fontSize: 14,
  },
  taskContent: {
    flex: 1,
    marginLeft: 15,
  },
  taskTitle: {
    color: currentTheme.textColor,
    fontSize: 18,
    fontWeight: "500",
    flexWrap: "wrap",
  },
  taskDesc: {
    fontSize: 14,
    color: currentTheme.textColor,
    flexWrap: "wrap",
  },
  dateDue: {
    color: currentTheme.textColor,
    fontSize: 10,
  },
  completedText: {
    color: "#a0a0a0",
    textDecorationLine: "line-through",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: "#d9534f",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    padding: 10,
    borderRadius: 5,
  },
});

export default styles;
