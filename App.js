import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from "./AppStyles";
import ToDoItem from "./components/toDoItem";
import NewTask from "./components/newTask";
import EditTask from "./components/editTask";

const initialToDoData = [
  {
    id: "1",
    title: "This is a long task title to buy groceries",
    desc: "Get milk, eggs, and bread",
    due: "2024-09-16",
    completed: false,
  },
  {
    id: "2",
    title: "Walk the dog",
    desc: "Take Buddy to the park",
    due: "2024-09-17",
    completed: false,
  },
  {
    id: "3",
    title: "Do laundry",
    desc: "Wash whites and colors separately",
    due: "2024-09-18",
    completed: false,
  },
];

export default function App() {
  const [toDoData, setToDoData] = useState(initialToDoData);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleComplete = (id) => {
    setToDoData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const addNewTask = (newTask) => {
    const maxId = Math.max(...toDoData.map((item) => parseInt(item.id, 10)));
    const taskToAdd = {
      id: (maxId + 1).toString(),
      ...newTask,
      completed: false,
    };
    setToDoData([...toDoData, taskToAdd]);
    setModalVisible(false);
  };

  // Split tasks into incomplete and completed
  const incompleteTasks = toDoData.filter((task) => !task.completed);
  const completedTasks = toDoData.filter((task) => task.completed);

  // Sort tasks by ID to maintain original order
  const sortedIncompleteTasks = incompleteTasks.sort((a, b) =>
    a.id.localeCompare(b.id)
  );
  const sortedCompletedTasks = completedTasks.sort((a, b) =>
    a.id.localeCompare(b.id)
  );

  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.wrappercontainer}>
        <Text style={styles.title}>Simple To Do</Text>
        <Text style={styles.subtitle}>Incomplete Tasks</Text>
        <FlatList
          data={sortedIncompleteTasks}
          renderItem={({ item }) => (
            <ToDoItem
              id={item.id}
              title={item.title}
              desc={item.desc}
              due={item.due}
              completed={item.completed}
              onToggleComplete={toggleComplete}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <Text style={styles.subtitle}>Completed Tasks</Text>
        <FlatList
          data={sortedCompletedTasks}
          renderItem={({ item }) => (
            <ToDoItem
              id={item.id}
              title={item.title}
              desc={item.desc}
              due={item.due}
              completed={item.completed}
              onToggleComplete={toggleComplete}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>New Task</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
