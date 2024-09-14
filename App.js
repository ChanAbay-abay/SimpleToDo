import React, { useState } from "react";
import { SafeAreaView, StatusBar, FlatList, View, Text } from "react-native";
import styles from "./AppStyles";
import ToDoItem from "./components/ToDoItem";

const initialToDoData = [
  {
    id: "1",
    title: "Buy groceries",
    desc: "Get milk, eggs, and bread",
    due: "2024-09-16",
  },
  {
    id: "2",
    title: "Walk the dog",
    desc: "Take Buddy to the park",
    due: "2024-09-17",
  },
  {
    id: "3",
    title: "Do laundry",
    desc: "Wash whites and colors separately",
    due: "2024-09-18",
  },
];

export default function App() {
  const [toDoData, setToDoData] = useState(initialToDoData);

  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.wrappercontainer}>
        <Text style={styles.title}>Simple To Do</Text>
        <FlatList
          data={toDoData}
          renderItem={({ item }) => (
            <ToDoItem title={item.title} desc={item.desc} due={item.due} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
