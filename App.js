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
  const [showNewTask, setShowNewTask] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

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
    setShowNewTask(false);
  };

  const editTask = (updatedTask) => {
    setToDoData((prevData) =>
      prevData.map((item) => (item.id === updatedTask.id ? updatedTask : item))
    );
    setEditingTask(null);
  };

  const incompleteTasks = toDoData.filter((task) => !task.completed);
  const completedTasks = toDoData.filter((task) => task.completed);

  const sortedIncompleteTasks = incompleteTasks.sort((a, b) =>
    a.id.localeCompare(b.id)
  );
  const sortedCompletedTasks = completedTasks.sort((a, b) =>
    a.id.localeCompare(b.id)
  );

  const displayedTasks = [...sortedIncompleteTasks];
  if (showNewTask) {
    displayedTasks.push({
      id: "new-task",
      title: "Add New Task",
      desc: "",
      due: "",
    });
  }

  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.wrappercontainer}>
        <Text style={styles.title}>Simple To Do</Text>
        <Text style={styles.subtitle}>Incomplete Tasks</Text>
        <FlatList
          data={displayedTasks}
          renderItem={({ item }) => {
            if (item.id === "new-task") {
              return <NewTask onSave={addNewTask} />;
            }
            if (editingTask && editingTask.id === item.id) {
              return (
                <EditTask
                  task={editingTask}
                  onSave={editTask}
                  onCancel={() => setEditingTask(null)}
                />
              );
            }
            return (
              <ToDoItem
                id={item.id}
                title={item.title}
                desc={item.desc}
                due={item.due}
                completed={item.completed}
                onToggleComplete={toggleComplete}
                onEdit={(id) =>
                  setEditingTask(toDoData.find((task) => task.id === id))
                }
              />
            );
          }}
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
              onEdit={(id) =>
                setEditingTask(toDoData.find((task) => task.id === id))
              }
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setShowNewTask(!showNewTask)}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}
