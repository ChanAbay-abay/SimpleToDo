import React from "react";
import { View, Text } from "react-native";
import styles from "./ToDoItemStyles";

const ToDoItem = ({ title, desc, due }) => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.checkbox}>
        <Text>checkbox here</Text>
      </View>
      <View style={styles.taskContent}>
        <Text style={styles.taskTitle}>{title}</Text>
        <Text style={styles.taskDesc}>{desc}</Text>
        <Text style={styles.dateDue}>{due}</Text>
      </View>
    </View>
  );
};

export default ToDoItem;
