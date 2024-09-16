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
  onSelect,
  isSelected,
  selectMode
}) => {
  return (
    <TouchableOpacity
  style={[styles.taskContainer, completed && styles.completed]}
  onPress={() => selectMode ? onSelect(id) : onEdit && onEdit(id)}
>
  {selectMode ? (
    <TouchableOpacity
      style={[
        styles.checkbox,
        isSelected && { borderColor: 'red' } // Red border for selected
      ]}
    >
      <Text style={[styles.checkboxText, isSelected && { color: 'red' }]}>
        {isSelected ? "✔" : ""}
      </Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={styles.checkbox}
      onPress={() => onToggleComplete(id)}
    >
      <Text style={styles.checkboxText}>{completed ? "✔" : ""}</Text>
    </TouchableOpacity>
  )}

  <View style={styles.taskContent}>
    <Text style={[styles.taskTitle, completed && styles.completedTaskTitle]}>
      {title}
    </Text>
    {desc ? (
      <Text style={[styles.taskDesc, completed && styles.completedTaskDesc]}>
        {desc}
      </Text>
    ) : null}
    {due ? ( // Render the date only if it exists
      <Text style={[styles.dateDue, completed && styles.completedDateDue]}>
        {due}
      </Text>
    ) : null}
  </View>
</TouchableOpacity>
  );
};

export default ToDoItem;
