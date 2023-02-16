import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { fetchDeleteArea } from "../../store/slices/area";
import { useSelector, useDispatch } from "react-redux";

const Area = ({ data }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleGoRoom = () => {
    navigation.navigate("RoomScreen", { data });
  };

  const handleEdit = () => {
    navigation.navigate("InfoAreaScreen", { data });
  };

  const user = useSelector((states) => states.User.user[0]);

  const onDelete = () => {
    if (user?.Quyen == "Tất cả") {
      Alert.alert("Thông báo", "Bạn có muốn xóa khu vực", [
        {
          text: "Đồng ý",
          onPress: () => {
            dispatch(fetchDeleteArea({ idKhu: data.idKhu }));
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
    <View style={styles.container}>
      <View style={styles.area}>
        <TouchableOpacity style={styles.btnEdit} onPress={handleEdit}>
          <Feather name="edit" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boxImg}
          onPress={handleGoRoom}
          onLongPress={onDelete}
        >
          <Image
            source={require("../../assets/images/Home.png")}
            style={styles.img}
          />
        </TouchableOpacity>
        <View style={styles.boxContent}>
          <Text style={styles.textContent}>{data.TenKhu}</Text>
        </View>
      </View>
    </View>
  );
};

export default Area;
