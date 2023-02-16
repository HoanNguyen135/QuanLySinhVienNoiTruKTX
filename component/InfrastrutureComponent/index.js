import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../contains";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { fetchDeleteInfrastructure } from "../../store/slices/infrastructure";
import { useSelector, useDispatch } from "react-redux";

const InfrastructureGrid = ({ data }) => {


  

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleGoDetail = () => {
    navigation.navigate("InfoInfrastructureScreen", { data });
  };

  const handleDelete = () => {
    Alert.alert("Thông báo", "Bạn có muốn xóa cơ sở vật chất", [
      {
        text: "Đồng ý",
        onPress: () => {
          dispatch(
            fetchDeleteInfrastructure({
              idCsvc: data.idCsvc,
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
        <Text style={styles.layoutTextHeader}>{data.idCsvc}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{data.TenCsvc}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{data.GiaTien}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{data.TrangThai}</Text>
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

export default InfrastructureGrid;
