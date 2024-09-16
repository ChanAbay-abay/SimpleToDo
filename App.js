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
  const [selectMode, setSelectMode] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState([]);

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

  const toggleTaskSelection = (id) => {
    setSelectedTasks((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((taskId) => taskId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectMode = () => {
    setSelectMode(!selectMode);
    if (selectMode) {
      setSelectedTasks([]);
    }
  };

  const handleSelectAll = () => {
    setSelectedTasks(toDoData.map((task) => task.id));
  };

  const handleDeleteSelected = () => {
    setToDoData((prevData) => prevData.filter((task) => !selectedTasks.includes(task.id)));
    setSelectedTasks([]);
    setSelectMode(false);
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

          {/* select or done button */}
          <TouchableOpacity
              style={styles.selectButton}
              onPress={handleSelectMode}
            >
              <Text style={styles.selectButtonText}>
                {selectMode ? "Done" : "Select"}
              </Text>
          </TouchableOpacity>

          <FlatList
            data={displayedTasks}
            renderItem={({ item }) => {
              {/*render NewTask if the item represents a new task*/}
              if (item.id === "new-task") {
                return (
                  <NewTask
                    onSave={addNewTask}
                    onCancel={handleNewTaskCancel}
                  />
                );
              }

              {/*render EditTask inline if the item is being edited*/}
              if (item.id === editingTaskId) {
                return (
                  <EditTask
                    task={item}
                    onSave={editTask}
                    onCancel={() => setEditingTaskId(null)}
                    onDelete={() => deleteTask(item.id)}  // Pass in the specific task ID for deletion
                  />
                );
              }

              {/*render the task in view mode*/}
              const isSelected = selectedTasks.includes(item.id); // Check if the task is selected
              return (
                <ToDoItem
                  id={item.id}
                  title={item.title}
                  desc={item.desc}
                  due={item.due}
                  completed={item.completed}
                  onToggleComplete={toggleComplete}
                  onEdit={() => setEditingTaskId(item.id)}
                  onSelect={() => toggleTaskSelection(item.id)}
                  isSelected={isSelected}
                  selectMode={selectMode}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />

          {/* action buttons: show finished or select alll */}
          <ActionButtons
            showCompletedTasks={showCompletedTasks}
            showNewTask={showNewTask}
            onToggleCompletedTasks={() => setShowCompletedTasks(!showCompletedTasks)}
            onToggleNewTask={() => setShowNewTask(!showNewTask)}
            solidBackground={displayedTasks.length >= 8}
            onSelectMode={handleSelectMode}
            onSelectAll={handleSelectAll}
            onDeleteSelected={handleDeleteSelected}
            selectMode={selectMode}
          />
        </View>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    <StatusBar style="light" />
  </SafeAreaView>
);
}