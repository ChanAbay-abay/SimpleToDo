import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Importing Material Icons
import styles from "./toDoItemStyles";

const EditTask = ({ task, onSave, onCancel, onDelete }) => {
  const [title, setTitle] = useState(task.title || "");
  const [desc, setDesc] = useState(task.desc || "");
  const [due, setDue] = useState(task.due || "");
  const [isCompleted, setIsCompleted] = useState(task.isCompleted || false);

  useEffect(() => {
    setTitle(task.title || "");
    setDesc(task.desc || "");
    setDue(task.due || "");
    setIsCompleted(task.isCompleted || false);
  }, [task]);

  const handleSave = () => {
    if (title || desc || due) {
      const updatedTask = { ...task, title, desc, due, isCompleted };
      if (onSave) {
        onSave(updatedTask);
      }
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(task.id);
    }
  };

  const toggleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity
        style={[styles.checkbox, isCompleted ? styles.completed : {}]}
        onPress={toggleComplete}
      >
        {isCompleted && <Icon name="check" size={20} color="white" />}
      </TouchableOpacity>
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSave}
          disabled={!title && !desc && !due}
        >
          <Icon name="check" size={10} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Icon name="close" size={10} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Icon name="delete" size={10} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditTask;
