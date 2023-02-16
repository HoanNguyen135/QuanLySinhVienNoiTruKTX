import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const UserComponent = ({ data ,update}) => {
  const navigation = useNavigation();

  const handleGoDetail = () => {
    navigation.navigate("InfoUserSearchScreen", { data,update });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleGoDetail}>
      <View style={styles.rowInfo}>
        <View style={styles.stylePublic}>
          <Ionicons name="person" size={15} color="black" />
        </View>
        <Text>Tên tài khoản: {data.TenTaiKhoan}</Text>
        
      </View>
      <View style={styles.rowInfo}>
      <View style={styles.stylePublic}>
          <AntDesign name="idcard" size={15} color="black" />
        </View>
        <Text>Chức vụ: {data.ChucVu}</Text>
      </View>
      <View style={styles.rowInfo}>
        <View style={styles.stylePublic}>
          <EvilIcons name="location" size={15} color="black" />
        </View>
        <Text>Email : {data.Email}</Text>
      </View>
      <View style={styles.rowInfo}>
        <View style={styles.stylePublic}>
          <EvilIcons name="location" size={15} color="black" />
        </View>
        <Text>Trạng thái : {data.TrangThai}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserComponent;
