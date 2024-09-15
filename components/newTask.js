import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./toDoItemStyles"; // Reuse the ToDoItem styles

const NewTask = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [due, setDue] = useState("");

  const handleSave = () => {
    if (title && desc && due) {
      const newTask = { title, desc, due };
      onSave(newTask);
      setTitle("");
      setDesc("");
      setDue("");
    }
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
      <TouchableOpacity style={styles.checkbox} onPress={handleSave}>
        <Text style={styles.checkboxText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewTask;
