import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import icons
import styles from "./toDoItemStyles";

const NewTask = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [due, setDue] = useState("");

  const handleSave = () => {
    const taskTitle = title.trim() === "" ? "New Reminder" : title;
    if (taskTitle || desc || due) {
      const newTask = { title: taskTitle, desc, due };
      if (onSave) {
        onSave(newTask);
      }
      setTitle("");
      setDesc("");
      setDue("");
    }
  };

  const handleCancel = () => {
    setTitle("");
    setDesc("");
    setDue("");
    if (onCancel) {
      onCancel();
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
      <TouchableOpacity style={styles.actionButton} onPress={handleSave}>
        <Ionicons name="checkmark-circle" size={28} color="green" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={handleCancel}>
        <Ionicons name="close-circle" size={28} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default NewTask;
