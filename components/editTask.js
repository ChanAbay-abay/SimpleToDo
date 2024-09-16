import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import icons
import styles from "./toDoItemStyles";

const EditTask = ({ task, onSave, onCancel, onDelete }) => {
  const [title, setTitle] = useState(task.title || "");
  const [desc, setDesc] = useState(task.desc || "");
  const [due, setDue] = useState(task.due || "");

  useEffect(() => {
    setTitle(task.title || "");
    setDesc(task.desc || "");
    setDue(task.due || "");
  }, [task]);

  const handleSave = () => {
    if (title || desc || due) {
      const updatedTask = { ...task, title, desc, due };
      if (onSave) {
        onSave(updatedTask);
      }
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
      {/* Save button */}
      <TouchableOpacity style={styles.actionButton} onPress={handleSave}>
        <Ionicons name="checkmark-circle" size={28} color="green" />
      </TouchableOpacity>

      {/* Cancel button */}
      <TouchableOpacity style={styles.actionButton} onPress={onCancel}>
        <Ionicons name="close-circle" size={28} color="red" />
      </TouchableOpacity>

      {/* Delete button */}
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => onDelete(task.id)}
      >
        <Ionicons name="trash-bin" size={28} color="darkred" />
      </TouchableOpacity>
    </View>
  );
};

export default EditTask;
