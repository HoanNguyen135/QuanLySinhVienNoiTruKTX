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
import { FormatDate } from "../../help";

const PriceGrid = ({ data }) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleGoDetail = () => {
    navigation.navigate("InfoPrice", { data });
  };


  return (
    <View style={styles.layoutGrid}>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{data.idGiaDienNuoc}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{data.giaDien}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{data.giaNuoc}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{FormatDate(data.NgayTaoGiaDienNuoc)}</Text>
      </View>
      <View style={[styles.column, styles.boxIcon]}>
        <TouchableOpacity style={styles.icon} onPress={handleGoDetail}>
          <FontAwesome name="eye" size={14} color={COLORS.logo} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PriceGrid;
