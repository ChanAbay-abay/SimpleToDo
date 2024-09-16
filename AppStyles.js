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
    fontWeight: "900",
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
    fontWeight: "600",
  },
  showCompButton: {
    backgroundColor: "#525252",
    borderRadius: 32,
    height: 60,
    width: 164,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    left: 30,
  },
  showCompButtonText: {
    color: "#fff",
    fontSize: 16, // Adjust font size as needed
    fontWeight: "600",
  },
});

export default styles;
