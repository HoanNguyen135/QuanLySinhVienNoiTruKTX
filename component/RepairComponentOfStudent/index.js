import { View, Text, TouchableOpacity,Alert } from "react-native";
import React from "react";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { fetchDeleteViolation } from "../../store/slices/violation";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FormatDate } from "../../help";
import { useSelector, useDispatch } from "react-redux";

const RepairComponentOfStudent = ({ data }) => {
  return (
    <TouchableOpacity style={styles.container} >
      <View style={styles.rowInfo}>
        <View style={styles.stylePublic}>
          <Ionicons name="person" size={15} color="black" />
        </View>
        <Text>Họ và tên: {data.NguoiBaoSua}</Text>
      </View>
      <View style={styles.rowInfo}>
        <View style={styles.styleLeft}>
        <AntDesign name="warning" size={15} color="black" />
        </View>
        <Text>Nội dung : {data.NoiDung}</Text>
      </View>
      <View style={styles.rowInfo}>
        <View style={styles.stylePublic}>
        <AntDesign name="creditcard" size={15} color="black" />
        </View>
        <Text numberOfLines={1}>Mô tả: {data.MoTaSuaChua}</Text>
      </View>
      <View style={styles.rowInfo}>
        <View style={styles.stylePublic}>
        <AntDesign name="creditcard" size={15} color="black" />
        </View>
        <Text numberOfLines={1}>Trạng thái: {data.TrangThaiSuaChua}</Text>
      </View>
      <View style={styles.rowInfo}>
        <View style={styles.stylePublic}>
        <AntDesign name="calendar" size={15} color="black" />
        </View>
        <Text>Ngày báo: {FormatDate(data.NgayTaoSuaChua)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RepairComponentOfStudent;
