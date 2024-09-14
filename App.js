import React from "react";
import { SafeAreaView, StatusBar, FlatList, View, Text } from "react-native";
import styles from "./AppStyles"; // Import styles from AppStyles.js
import ToDoItem from "./components/ToDoItem"; // Import ToDoItem component

const toDoData = [
  { id: "1", title: "Buy groceries" },
  { id: "2", title: "Walk the dog" },
  { id: "3", title: "Do laundry" },
  // Add more to-do items here
];

export default function App() {
  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.wrappercontainer}>
        <Text style={styles.title}>Simple To Do</Text>
        <FlatList
          data={toDoData}
          renderItem={({ item }) => <ToDoItem title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
