import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../contains";
import { useNavigation } from "@react-navigation/native";

const ManagePermissionGrid = ({ data, setIsUpdate }) => {
  const navigation = useNavigation();

  const handleGoDetail = () => {
    navigation.navigate("InfoUserManage", { data, setIsUpdate });
  };

  return (
    <View style={styles.layoutGrid}>
      <View style={styles.stt}>
        <Text style={styles.layoutTextHeader}>{data.Id}</Text>
      </View>
      <View style={styles.userName}>
        <Text style={styles.layoutTextHeader} numberOfLines={1}>
          {data.TenTaiKhoan}
        </Text>
      </View>
      <View style={styles.position}>
        <Text style={styles.layoutTextHeader} numberOfLines={1}>
          {data.TenKhu}
        </Text>
      </View>
      <View style={[styles.boxIcon]}>
        <TouchableOpacity style={styles.icon} onPress={handleGoDetail}>
          <FontAwesome name="eye" size={14} color={COLORS.logo} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ManagePermissionGrid;
