import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./toDoItemStyles";

const EditTask = ({ task, onSave, onCancel }) => {
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
      <TouchableOpacity
        style={styles.checkbox}
        onPress={handleSave}
        disabled={!title && !desc && !due}
      >
        <Text
          style={[
            styles.checkboxText,
            { color: !title && !desc && !due ? "#a0a0a0" : "white" },
          ]}
        >
          Save Task
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditTask;
