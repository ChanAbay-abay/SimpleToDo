import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

import styles from "./AppStyles";
import ToDoItem from "./components/toDoItem";
import NewTask from "./components/newTask";
import EditTask from "./components/editTask";
import ActionButtons from "./components/actionButton";

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
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);

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
    setEditingTaskId(null);
  };

  const deleteTask = (id) => {
    setToDoData((prevData) => prevData.filter((item) => item.id !== id));
    setEditingTaskId(null);
  };

  const handleNewTaskCancel = () => {
    setShowNewTask(false);
  };

  // Split tasks into incomplete and completed
  const incompleteTasks = toDoData.filter((task) => !task.completed);
  const completedTasks = toDoData.filter((task) => task.completed);

  // Sort both lists by ID
  const sortedIncompleteTasks = incompleteTasks.sort((a, b) =>
    a.id.localeCompare(b.id)
  );
  const sortedCompletedTasks = completedTasks.sort((a, b) =>
    a.id.localeCompare(b.id)
  );

  const displayedTasks = showCompletedTasks
    ? [...sortedIncompleteTasks, ...sortedCompletedTasks]
    : sortedIncompleteTasks;
  
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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <View style={styles.wrappercontainer}>
            <Text style={styles.title}>Simple To Do</Text>
            <FlatList
              data={displayedTasks}
              renderItem={({ item }) => {
                if (item.id === "new-task") {
                  return (
                    <NewTask onSave={addNewTask} onCancel={handleNewTaskCancel} />
                  );
                }
                if (item.id === editingTaskId) {
                  return (
                    <EditTask
                      task={item}
                      onSave={editTask}
                      onCancel={() => setEditingTaskId(null)}
                      onDelete={deleteTask}
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
                    onEdit={() => setEditingTaskId(item.id)}
                  />
                );
              }}
              keyExtractor={(item) => item.id}
            />

            <ActionButtons
              showCompletedTasks={showCompletedTasks}
              showNewTask={showNewTask}
              onToggleCompletedTasks={() => setShowCompletedTasks(!showCompletedTasks)}
              onToggleNewTask={() => setShowNewTask(!showNewTask)}
              solidBackground={displayedTasks.length >= 8} // if 8 then solid
            />

            <TouchableOpacity
              style={styles.selectButton}
              onPress={() => setIsSelecting(!isSelecting)}
            >
              <Text style={styles.selectButtonText}>Select</Text>
            </TouchableOpacity>
          </View>

        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
