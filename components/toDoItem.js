import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./toDoItemStyles";

const ToDoItem = ({
  id,
  title,
  desc,
  due,
  completed,
  onToggleComplete,
  onEdit,
}) => {
  return (
    <TouchableOpacity
      style={[styles.taskContainer, completed && styles.completed]}
      onPress={() => onEdit && onEdit(id)}
    >
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => onToggleComplete(id)}
      >
        <Text style={styles.checkboxText}>{completed ? "✔" : ""}</Text>
      </TouchableOpacity>
      <View style={styles.taskContent}>
        <Text style={[styles.taskTitle, completed && styles.completedTaskTitle]}>
          {title}
        </Text>
        {desc ? (
          <Text style={[styles.taskDesc, completed && styles.completedTaskDesc]}>
            {desc}
          </Text>
        ) : null}
        {desc ? (
          <Text style={[styles.dateDue, completed && styles.completedDateDue]}>
            {due}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default ToDoItem;
