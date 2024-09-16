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
    textAlign: "left",
    marginBottom: 10,
    marginLeft: 8,
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
    // position: "absolute",
    bottom: 1,
    right: 1.5,
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
    // position: "absolute",
    bottom: 1,
    left: 1.5,
  },
  showCompButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  selectButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    // backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
    zIndex: 1000,
  },
  selectButtonText: {
    color: '#1e90ff',
    fontSize: 16,
    marginTop: 12,
    paddingRight: 8,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
  },
  solidBackgroundContainer: {
    backgroundColor: '#181818', // Solid background for container
    padding: 15,
    borderRadius: 16,
  },
  transparentContainer: {
    backgroundColor: 'transparent', // Transparent background for container
    padding: 15,
  },
});

export default styles;
