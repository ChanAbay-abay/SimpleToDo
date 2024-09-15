import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import styles from "./taskModalStyles";

const TaskModal = ({ visible, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [due, setDue] = useState(new Date().toISOString().split("T")[0]);

  const handleSave = () => {
    onSave({ title, desc, due });
    setTitle("");
    setDesc("");
    setDue(new Date().toISOString().split("T")[0]);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add New Task</Text>
          <TextInput
            style={styles.input}
            placeholder="Add title"
            placeholderTextColor="white"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Add description"
            placeholderTextColor="white"
            value={desc}
            onChangeText={setDesc}
          />
          <TextInput
            style={styles.input}
            placeholder="Add due date"
            value={due}
            onChangeText={setDue}
          />
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save Task</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default TaskModal;
