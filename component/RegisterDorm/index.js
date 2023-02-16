import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RegisterDorm = ({ data,filter,update }) => {


  const navigation = useNavigation();

  const handleGoDetail = () => {
    navigation.navigate('InfoApplicationScreen',{data,filter,update})
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleGoDetail}>
      <View style={styles.rowInfo}>
        <View style={styles.stylePublic}>
          <Ionicons name="person" size={15} color="black" />
        </View>
        <Text>Họ và tên: {data.HoTen}</Text>
        <View style={styles.stylePublic}>
          <AntDesign name="idcard" size={15} color="black" />
        </View>
        <Text>Lớp: {data.Lop}</Text>
      </View>
      <View style={styles.rowInfo}>
        <View style={styles.stylePublic}>
          <FontAwesome name="phone" size={15} color="black" />
        </View>
        <Text>Số điện thoại: {data.Sdt}</Text>
        <View
          style={styles.styleLeft}
        >
          <MaterialCommunityIcons
            name="gender-male-female"
            size={15}
            color="black"
          />
        </View>
        <Text>Giới tính : {data.GioiTinh}</Text>
      </View>
      <View style={styles.rowInfo}>
        <View style={styles.stylePublic}>
          <EvilIcons name="location" size={15} color="black" />
        </View>
        <Text>Quê quán : {data.QueQuan}</Text>
        <View
          style={styles.styleRight}
        >
          <MaterialIcons name="people-alt" size={15} color="black" />
        </View>
        <Text style={{ width: 180, marginRight: 0 }} numberOfLines={1}>
          Đối tượng: {data.DoiTuong}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RegisterDorm;
