import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { InfrastructureInRoomGrid } from "../../component";
import { ScrollView } from "react-native-virtualized-view";
import { COLORS } from "../../contains";
import { useSelector, useDispatch } from "react-redux";
import { fetchListInfrastructureInRoom } from "../../store/slices/infrastructure";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const ListInfrastructureInRoom = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();

  const dataListInfrastructureInRoom = useSelector(
    (states) => states.Infrastructure.listInfrastructureInRoom
  );

  const { idArea: idKhu, idRoom: idPhong } = route.params;

  const update = useSelector((states) => states.Infrastructure.updateInRoom);

  useEffect(() => {
    dispatch(fetchListInfrastructureInRoom({ idPhong, idKhu }));
  }, [update]);

  const showElectricGrid = ({ item }) => {
    return <InfrastructureInRoomGrid data={item} />;
  };

  const handleAdd = () => {
    navigation.navigate("AddInfrastructureInRoom",{idPhong,idKhu});
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
              <Text style={styles.layoutTextHeader}>Phòng</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>Tên</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>SL còn tốt</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>SL hỏng</Text>
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
            data={dataListInfrastructureInRoom}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ListInfrastructureInRoom;
