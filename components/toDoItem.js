import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styles from "./toDoItemStyles";

const ToDoItem = ({
  id,
  title,
  desc,
  due, // Due date (optional)
  completed,
  onToggleComplete,
  onEdit,
}) => {
  return (
    <View style={[styles.taskContainer, completed && styles.completed]}>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => onToggleComplete(id)}
      >
        <View style={styles.checkbox}>
          <Text style={styles.checkboxText}>{completed ? "✔" : ""}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.taskContent}
        onPress={() => onEdit && onEdit(id)}
      >
        <Text
          style={[styles.taskTitle, completed && styles.completedTaskTitle]}
        >
          {title}
        </Text>
        {desc ? (
          <Text
            style={[styles.taskDesc, completed && styles.completedTaskDesc]}
          >
            {desc}
          </Text>
        ) : null}
        {due ? (
          <Text style={[styles.dateDue, completed && styles.completedDateDue]}>
            {due}
          </Text>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default ToDoItem;
