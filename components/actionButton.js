import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../AppStyles"; // Adjust the path based on your file structure

const ActionButtons = ({ showCompletedTasks, showNewTask, onToggleCompletedTasks, onToggleNewTask, solidBackground }) => {
const containerStyle = solidBackground ? styles.solidBackgroundContainer : styles.transparentContainer;

return (
    <View style={[styles.actionButtonsContainer, containerStyle]}>
    <TouchableOpacity
        style={styles.showCompButton}
        onPress={onToggleCompletedTasks}
    >
        <Text style={styles.showCompButtonText}>
        {showCompletedTasks ? "Hide Finished" : "Show Finished"}
        </Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.addButton}
        onPress={onToggleNewTask}
    >
        <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
    </View>
);
};

export default ActionButtons;
