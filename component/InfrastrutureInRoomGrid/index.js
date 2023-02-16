import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../contains";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { fetchDeleteInfrastructureInRoom } from "../../store/slices/infrastructure";
import { useSelector, useDispatch } from "react-redux";

const InfrastructureInRoomGrid = ({ data }) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleGoDetail = () => {
    navigation.navigate("InfoInfrastructureInRoom", { data });
  };

  const handleDelete = () => {
    Alert.alert("Thông báo", "Bạn có muốn xóa cơ sở vật chất", [
      {
        text: "Đồng ý",
        onPress: () => {
          dispatch(
            fetchDeleteInfrastructureInRoom({
              idCsvcPhong: data.idCsvcPhong,
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
  };

  return (
    <View style={styles.layoutGrid}>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{data.idCsvcPhong}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{data.TenPhong}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{data.TenCsvc}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{data.SoLuongDaHong}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{data.SoLuongConTot}</Text>
      </View>
      <View style={[styles.column, styles.boxIcon]}>
        <TouchableOpacity style={styles.icon} onPress={handleGoDetail}>
          <FontAwesome name="eye" size={14} color={COLORS.logo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={handleDelete}>
          <AntDesign name="delete" size={14} color={COLORS.logo} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InfrastructureInRoomGrid;
