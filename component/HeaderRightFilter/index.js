import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const HeaderRightFilter = () => {

  const navigation = useNavigation();


  const handleGoToFilter = () => {
      navigation.navigate('FilterApplicationDorm')
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleGoToFilter}>
      <AntDesign name="filter" size={16} color="white" />
    </TouchableOpacity>
  );
};

export default HeaderRightFilter;
