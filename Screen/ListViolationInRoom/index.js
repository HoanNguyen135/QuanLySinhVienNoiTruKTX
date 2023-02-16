import { View, Text, FlatList,TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { ViolationComponent } from "../../component";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView } from "react-native-virtualized-view";
import { useRoute } from "@react-navigation/native";
import { COLORS } from "../../contains";
import { fetchListViolationInRoom } from "../../store/slices/violation";
import { useNavigation } from "@react-navigation/native";


const ListViolationInRoom = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const route = useRoute();

  const nameRoom = route.params.data.TenPhong;

  const { idKhu, idPhong } = route.params.data;

  const dataViolationInRoom = useSelector(
    (states) => states.Violation.listViolation
  );

  const update = useSelector(
    (states) => states.Violation.update
  );

  useEffect(() => {
    dispatch(fetchListViolationInRoom({ idKhu, idPhong }));
  }, [update]);

  const renderRegisterDorm = ({ item }) => {
    return <ViolationComponent data={item} />;
  };

  const handleAddViolation = () => {
    navigation.navigate('AddViolationScreen',{data: { idKhu, idPhong,nameRoom }})
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.modelDrop}>
        <Text style={{ color: COLORS.white }}>{nameRoom}</Text>
      </View>
      <TouchableOpacity style={styles.btnAdd} onPress={handleAddViolation}>
        <Text style={{ color: COLORS.white }}>Thêm vi phạm</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.flatList}
        data={dataViolationInRoom}
        renderItem={renderRegisterDorm}
        keyExtractor={(item) => item.idViPham.toString()}
      />
    </ScrollView>
  );
};

export default ListViolationInRoom;
