import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect,memo } from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { fetchDeleteRoom } from "../../store/slices/room";
import { useSelector, useDispatch } from "react-redux";

const Room = ({ data }) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const user = useSelector((states) => states.User.user[0]);

  const handleClick = () => {
    navigation.navigate("ListStudentInRoomScreen", { data });
  };

  const handleDelete = () => {
    if (user?.Quyen == "Tất cả") {
      Alert.alert("Thông báo", "Bạn có muốn xóa phòng", [
        {
          text: "Đồng ý",
          onPress: () => {
            dispatch(
              fetchDeleteRoom({
                dataRoom: {
                  idPhong: data.idPhong,
                  idKhu: data.idKhu,
                  Floor: data.Tang,
                },
              })
            );
          },
        },
        {
          text: "Hủy",
          onPress: () => {},
          style: "cancel",
        },
      ]);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container,data.TrangThai=="Đang sửa chữa" && styles.idRepair,data.TrangThai=="Đã bị hư hỏng" && styles.isBroken]}
      onPress={handleClick}
      onLongPress={handleDelete}
    >
      <Text style={styles.textNameRoom}>{data.TenPhong}</Text>
      <Text style={styles.textNumberRoom}>
        {data.SoNguoi}/{data.SoLuong}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(Room);
