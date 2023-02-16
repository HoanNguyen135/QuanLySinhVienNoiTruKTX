import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { RepairComponentOfStudent } from "../../component";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView } from "react-native-virtualized-view";
import { useRoute } from "@react-navigation/native";
import { COLORS } from "../../contains";
import { fetchGetListRepairOfStudent } from "../../store/slices/repair";
import { useNavigation } from "@react-navigation/native";

const RepairOfStudent = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const dataRepair = useSelector((states) => states.Repair.listRepairOfStudent);

  const updateOfStudent = useSelector((states) => states.Repair.updateOfStudent);

  const idPhong = useSelector((states) => states.User.dataStudent[0].idPhong);

  const FullName = useSelector((states) => states.User.dataStudent[0].HoTen);

  useEffect(() => {
    dispatch(fetchGetListRepairOfStudent({ idPhong }));
  }, [updateOfStudent]);

  const renderRegisterDorm = ({ item }) => {
    return <RepairComponentOfStudent data={item} />;
  };

  const handleAddViolation = () => {
    navigation.navigate("AddRepairOfStudent", { FullName, idPhong });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.nameRoom} >
        <Text style={{ color: COLORS.white }}>{dataRepair[0]?.TenPhong}</Text>
      </View>
      <TouchableOpacity style={styles.btnAdd} onPress={handleAddViolation}>
        <Text style={{ color: COLORS.white }}>Báo sửa chữa</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.flatList}
        data={dataRepair}
        renderItem={renderRegisterDorm}
        keyExtractor={(item) => item.idSuaChua.toString()}
      />
    </ScrollView>
  );
};

export default RepairOfStudent;
