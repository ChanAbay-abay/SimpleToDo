import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./toDoItemStyles"; // Reuse the ToDoItem styles

const NewTask = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [due, setDue] = useState("");

  const handleSave = () => {
    const newTask = { title, desc, due }; // Create task object with potentially empty fields
    if (onSave) {
      onSave(newTask); // Pass new task to App.js
    }
    // Clear the fields after saving
    setTitle("");
    setDesc("");
    setDue("");
  };

  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskContent}>
        <TextInput
          style={styles.taskTitle}
          placeholder="Task Title"
          placeholderTextColor="#a0a0a0"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.taskDesc}
          placeholder="Task Description"
          placeholderTextColor="#a0a0a0"
          value={desc}
          onChangeText={setDesc}
        />
        <TextInput
          style={styles.dateDue}
          placeholder="Due Date (YYYY-MM-DD)"
          placeholderTextColor="#a0a0a0"
          value={due}
          onChangeText={setDue}
        />
      </View>
      <TouchableOpacity
        style={styles.checkbox} // Keep the style as it was
        onPress={handleSave}
      >
        <Text style={styles.checkboxText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewTask;
