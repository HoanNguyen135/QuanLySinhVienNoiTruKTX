import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FormatDate } from "../../help";
import { useSelector, useDispatch } from "react-redux";
import { fetchRemoveStudentInRoom } from "../../store/slices/student";

const StudentInRoom = ({ data, update, dataRoom }) => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("InfoStudentScreen", { data, update });
  };

  const handleRemoveInRoom = () => {
    Alert.alert("Thông báo", "Bạn có muốn xóa sinh viên khỏi phòng", [
      {
        text: "Đồng ý",
        onPress: () => {
          dispatch(fetchRemoveStudentInRoom({ idSV: data.idSV })).then(
            (res) => {
              if (!res.error) {
                navigation.navigate("ListStudentInRoomScreen", {
                  data: { ...dataRoom },
                });
              }
            }
          );
        },
      },
      {
        text: "Hủy",
        onPress: () => {},
        style: "cancel",
      },
    ]);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleClick}
      onLongPress={handleRemoveInRoom}
    >
      <View style={styles.boxAvatar}>
        <Image style={styles.imgAvatar} source={{ uri: data.AnhDaiDien }} />
      </View>
      <View style={styles.infoStudent}>
        <Text style={[styles.textName, styles.text]}>{data.HoTen}</Text>
        <Text style={[styles.textMSV, styles.text]}>MSV : {data.MSV}</Text>
        <Text style={[styles.textClass, styles.text]}>Lớp : {data.Lop}</Text>
        <Text style={[styles.textBirth, styles.text]}>
          Ngày sinh : {FormatDate(data.NgaySinh)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default StudentInRoom;
