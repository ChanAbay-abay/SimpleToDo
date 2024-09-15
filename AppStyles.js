import { StyleSheet } from "react-native";
import Theme from "./Theme";

const currentTheme = Theme.dark;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: currentTheme.backgroundColor,
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  wrappercontainer: {
    marginHorizontal: 15,
    marginBottom: 70,
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "orange",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "500",
    color: "white",
    marginVertical: 10,
  },
  text: {
    color: currentTheme.textColor,
    fontSize: 18,
  },
  // Styles for the NewTask component
  taskContainer: {
    backgroundColor: currentTheme.backgroundColorSecondary,
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  taskContent: {
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: currentTheme.textColor,
    marginBottom: 5,
  },
  taskDesc: {
    fontSize: 14,
    color: currentTheme.textSecondaryColor,
    marginBottom: 5,
  },
  dateDue: {
    fontSize: 14,
    color: currentTheme.textSecondaryColor,
  },
  checkbox: {
    backgroundColor: currentTheme.buttonColor,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  checkboxText: {
    color: currentTheme.buttonTextColor,
    fontWeight: "bold",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 12,
    zIndex: 1,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "900",
  },
});

export default styles;
