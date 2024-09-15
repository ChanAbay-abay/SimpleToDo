import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./toDoItemStyles";

const NewTask = ({ onSave }) => {
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
          Add Task
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewTask;
