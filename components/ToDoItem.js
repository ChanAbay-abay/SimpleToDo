import React from "react";
import { View, Text } from "react-native";
import styles from "./ToDoItemStyles"; // Import styles from ToDoItemStyles.js

const ToDoItem = ({ title }) => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.checkbox}>
        <Text>checkbox here</Text>
      </View>
      <View style={styles.taskContent}>
        <Text style={styles.taskTitle}>{title}</Text>
        <Text style={styles.taskDesc}>task desc</Text>
        <Text style={styles.dateDue}>date due</Text>
      </View>
    </View>
  );
};

export default ToDoItem;
