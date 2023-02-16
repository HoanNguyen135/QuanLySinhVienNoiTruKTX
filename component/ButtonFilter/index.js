import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

const ButtonFilter = ({ title, active, onPress }) => {
  const onChoice = () => {
    onPress(title);
  };

  return (
    <TouchableOpacity
      style={[styles.container, active == title && styles.active]}
      onPress={onChoice}
    >
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonFilter;
