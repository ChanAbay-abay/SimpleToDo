import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./toDoItemStyles";

const ToDoItem = ({ id, title, desc, due, completed, onToggleComplete }) => {
  return (
    <View style={[styles.taskContainer, completed && styles.completed]}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => onToggleComplete(id)}
      >
        <Text style={styles.checkboxText}>{completed ? "✔" : ""}</Text>
      </TouchableOpacity>
      <View style={styles.taskContent}>
        <Text style={[styles.taskTitle, completed && styles.completedText]}>
          {title}
        </Text>
        <Text style={[styles.taskDesc, completed && styles.completedText]}>
          {desc}
        </Text>
        <Text style={[styles.dateDue, completed && styles.completedText]}>
          {due}
        </Text>
      </View>
    </View>
  );
};

export default ToDoItem;
