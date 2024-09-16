import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../AppStyles";
import { Ionicons } from "@expo/vector-icons";

const ActionButtons = ({ 
    showCompletedTasks,
    showNewTask,
    onToggleCompletedTasks,
    onToggleNewTask,
    solidBackground,
    onSelectMode,
    onSelectAll,
    onDeleteSelected,
    selectMode
}) => {
  const containerStyle = solidBackground ? styles.solidBackgroundContainer : styles.transparentContainer;

  return (
    <View style={[styles.actionButtonsContainer, containerStyle]}>
      
      {selectMode ? (
          <>
          <View style={styles.selectModeButtons}>
            <TouchableOpacity
              style={styles.showCompButton}
              onPress={onSelectAll}
            >
              <Text style={styles.showCompButtonText}>Select All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addButton}
              onPress={onDeleteSelected}
            >
              <Ionicons style={styles.addButtonText}name="trash" size={28} color="white" />
            </TouchableOpacity>
          </View>
        </>
      ) : (
          <>
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
        </>
      )}
      </View>
  );
};

export default ActionButtons;
