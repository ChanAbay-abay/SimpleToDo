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
    marginBottom: 15,
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
});

export default styles;
