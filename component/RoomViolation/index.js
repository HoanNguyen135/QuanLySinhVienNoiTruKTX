import { View, Text, TouchableOpacity,Alert } from "react-native";
import React,{useState,useEffect} from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";


const RoomViolation = ({ data }) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleClick = () => {
    navigation.navigate("ListViolationInRoomScreen",{data});
  };

  return (
    <TouchableOpacity style={[styles.container, data?.checkViolation && styles.isViolation]} onPress={handleClick} >
      <Text style={styles.textNameRoom}>{data.TenPhong}</Text>
      <Text style={styles.textNumberRoom}>
        {data.SoNguoi}/{data.SoLuong}
      </Text>
    </TouchableOpacity>
  );
};

export default RoomViolation;
