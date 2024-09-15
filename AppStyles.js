import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 20,
  },
  wrappercontainer: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#bbb",
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: "#1e90ff",
    borderRadius: 30,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
  },
});

export default styles;
