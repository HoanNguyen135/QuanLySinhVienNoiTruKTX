import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { InfrastructureGrid } from "../../component";
import { ScrollView } from "react-native-virtualized-view";
import { COLORS } from "../../contains";
import { useSelector, useDispatch } from "react-redux";
import { fetchListInfrastructure } from "../../store/slices/infrastructure";
import { useNavigation } from "@react-navigation/native";

const ListInfrastructureScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const dataListInfrastructure = useSelector(
    (states) => states.Infrastructure.listInfrastructure
  );

  const update = useSelector((states) => states.Infrastructure.update);

  useEffect(() => {
    dispatch(fetchListInfrastructure());
  }, [update]);

  const showElectricGrid = ({ item }) => {
    return <InfrastructureGrid data={item} />;
  };

  const handleAdd = () => {
     navigation.navigate("AddInfrastructureScreen");
  };

  return (
    <ScrollView style={{ backgroundColor: COLORS.background }}>
      <TouchableOpacity style={styles.btnAdd} onPress={handleAdd}>
        <Text style={{ color: COLORS.white, fontSize: 13 }}>
          Thêm cở sở vật chất
        </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.layout}>
          <View style={styles.layoutTitle}>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>Mã</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>Tên cơ sở vật chất</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>Giá tiền</Text>
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
            listKey={(item) => item.idCsvc.toString()}
            renderItem={showElectricGrid}
            data={dataListInfrastructure}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ListInfrastructureScreen;
