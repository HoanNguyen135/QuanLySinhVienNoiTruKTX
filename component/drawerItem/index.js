import { View, Text } from "react-native";
import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DrawerItemComponent = ({ name, setFocus, focus }) => {
  const navigation = useNavigation();

  let icon, title;

  switch (name) {
    case "Home":
      icon = focus == name ? "home" : "home-outline";
      title = "Trang chủ";
      break;
    case "Favourite":
      icon = focus == name ? "heart-circle" : "heart-circle-outline";
      title = "Ưu thích";
      break;
    case "Setting":
      icon = focus == name ? "settings" : "settings-outline";
      title = "Cài đặt";
      break;
    default:
      break;
  }

  return (
    <DrawerItem
      icon={({ focused, color, size }) => (
        <Ionicons color={color} size={size} name={icon} />
      )}
      focused={focus == name ? true : false}
      label={title}
      onPress={() => {
        setFocus(name)
        navigation.navigate(name)
      }}
    />
  )
};

export default DrawerItemComponent;
