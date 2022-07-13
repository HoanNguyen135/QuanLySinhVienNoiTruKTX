import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const IconHeader = ({ name }) => {
  let icon = "menu";

  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  switch (name) {
    case "menu":
      icon = (
        <TouchableOpacity onPress={openDrawer}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
      );
      break;
    case "cart":
      icon = (
        <TouchableOpacity onPress={openDrawer}>
          <Ionicons name="cart" size={24} color="black" />
        </TouchableOpacity>
      );
      break;
    case "delete":
      icon = (
        <TouchableOpacity onPress={openDrawer}>
          <Ionicons name="trash-bin" size={24} color="black" />
        </TouchableOpacity>
      );
      break;
    default:
      break;
  }

  return icon;
};

export default IconHeader;
