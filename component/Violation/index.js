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

const ViolationComponent = ({ data,update }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleGoDetail = () => {
    navigation.navigate('InfoViolationScreen',{data,update})
  };

  const hanleDeleteViolation = () =>{
    Alert.alert(
      "Thông báo",
      "Bạn có muốn xóa vi phạm",
      [
        { text: "Đồng ý", onPress: () => {
          dispatch(fetchDeleteViolation({idKhu:data.idKhu,idPhong:data.idPhong,idViPham:data.idViPham}))
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
    <TouchableOpacity style={styles.container} onPress={handleGoDetail} onLongPress={hanleDeleteViolation}>
      <View style={styles.rowInfo}>
        <View style={styles.stylePublic}>
          <Ionicons name="person" size={15} color="black" />
        </View>
        <Text>Họ và tên: {data.HoTen}</Text>
      </View>
      <View style={styles.rowInfo}>
        <View style={styles.styleLeft}>
        <AntDesign name="warning" size={15} color="black" />
        </View>
        <Text>Vi phạm : {data.NoiDungViPham}</Text>
      </View>
      <View style={styles.rowInfo}>
        <View style={styles.stylePublic}>
        <AntDesign name="creditcard" size={15} color="black" />
        </View>
        <Text>MSV: {data.MSV}</Text>
        <View style={styles.styleRight}>
        <MaterialIcons name="meeting-room" size={15} color="black" />
        </View>
        <Text style={{ width: 180, marginRight: 0 }} numberOfLines={1}>
          Lớp: {data.Lop}
        </Text>
      </View>
      <View style={styles.rowInfo}>
        <View style={styles.stylePublic}>
        <AntDesign name="calendar" size={15} color="black" />
        </View>
        <Text>Ngày vi phạm: {FormatDate(data.NgayViPham)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ViolationComponent;
