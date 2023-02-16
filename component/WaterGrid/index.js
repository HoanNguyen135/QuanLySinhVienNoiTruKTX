import { View, Text, TouchableOpacity,Alert } from "react-native";
import React from "react";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../contains";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { fetchDeleteElectricAndWater } from "../../store/slices/electricandwater";

const WaterGrid = ({ data }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleGoDetail = () => {
    navigation.navigate("InfoWaterScreen", { data });
  };

  const handleDelete = () => {
    Alert.alert(
      "Thông báo",
      "Bạn có muốn xóa hóa đơn điện nước",
      [
        { text: "Đồng ý", onPress: () => {
          dispatch(fetchDeleteElectricAndWater({idDienNuoc: data.idDienNuoc,idKhu: data.idKhu}))
        }}
        ,
        {
          text: "Hủy",
          onPress: () => {},
          style: "cancel"
        },
        
      ]
    )
  }

  return (
    <View style={styles.layoutGrid}>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{data.idDienNuoc}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{data.TenPhong}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{data.SoNuocTruoc}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{data.SoNuocSau}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>
          {(data.SoNuocSau - data.SoNuocTruoc) * data.giaNuoc}
        </Text>
      </View>
      <View style={styles.column}>
        {data.TrangThaiDienNuoc == "Chưa nộp" ? (
          <FontAwesome name="close" size={14} color={COLORS.logo} />
        ) : (
          <Entypo name="check" size={14} color={COLORS.logo} />
        )}
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

export default WaterGrid;
