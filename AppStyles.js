import { StyleSheet } from "react-native";
import Theme from "./Theme";

const currentTheme = Theme.dark;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: currentTheme.backgroundColor,
  },
  wrappercontainer: {
    marginHorizontal: 15,
    marginBottom: 70, // Ensure space for the button
    flex: 1, // Ensures that the wrapper container takes up available space
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "orange",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "orange",
    marginVertical: 10,
  },
  text: {
    color: currentTheme.textColor,
    fontSize: 18,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 5,
    zIndex: 1, // Ensure the button is on top of other content
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
