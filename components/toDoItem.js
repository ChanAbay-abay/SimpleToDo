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
        <Text style={[styles.taskTitle, completed && styles.completedText]}>
          {title}
        </Text>
        {desc ? ( //if field not empty then display
          <Text style={[styles.taskDesc, completed && styles.completedText]}>
            {desc}
          </Text>
        ) : null}
        {/* <Text style={[styles.dateDue, completed && styles.completedText]}>
          Due: {due}
        </Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default ToDoItem;
