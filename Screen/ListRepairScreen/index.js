import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { fetchListRepair } from "../../store/slices/repair";
import { ScrollView } from "react-native-virtualized-view";
import { COLORS } from "../../contains";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RepairGrid } from "../../component";

const ListRepairScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const dataRepair = useSelector((states) => states.Repair.listRepair);

  const user = useSelector((states) => states.User.user[0]);

  var dataRepairPermission = [];

  if (user.Quyen == "Tất cả") {
    dataRepairPermission = dataRepair;
  } else {
    dataRepairPermission = dataRepair.filter(
      (item) => item.idKhu == user.Quyen
    );
  }

  const update = useSelector((states) => states.Repair.update);

  useEffect(() => {
    dispatch(fetchListRepair());
  }, [update]);

  const showElectricGrid = ({ item }) => {
    return <RepairGrid data={item} />;
  };

  const handleAdd = () => {
    navigation.navigate("AddRepairScreen");
  };

  return (
    <ScrollView style={{ backgroundColor: COLORS.background }}>
      <TouchableOpacity style={styles.btnAdd} onPress={handleAdd}>
        <Text style={{ color: COLORS.white, fontSize: 13 }}>Thêm sửa chữa</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.layout}>
          <View style={styles.layoutTitle}>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>Mã</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>Phòng</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>Nội dung</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>Trạng thái</Text>
            </View>
            <View style={[styles.column, styles.boxIcon]}>
              <View style={styles.column}>
                <Text style={styles.layoutTextHeader}>HĐ</Text>
              </View>
            </View>
          </View>
          <FlatList
            listKey={(item) => item.idCsvcPhong.toString()}
            renderItem={showElectricGrid}
            data={dataRepairPermission}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ListRepairScreen;
