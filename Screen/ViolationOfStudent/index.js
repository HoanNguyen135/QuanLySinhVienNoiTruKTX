import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { ViolationComponentOfStudent } from "../../component";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView } from "react-native-virtualized-view";
import { useRoute } from "@react-navigation/native";
import { COLORS } from "../../contains";
import { fetchListViolationOfStudent } from "../../store/slices/violation";
import { useNavigation } from "@react-navigation/native";

const ViolationOfStudent = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const dataRepair = useSelector(
    (states) => states.Violation.listViolationOfStudent
  );

  const idSV = useSelector((states) => states.User.dataStudent[0].idSV);

  useEffect(() => {
    dispatch(fetchListViolationOfStudent({ idSV }));
  }, []);

  const renderRegisterDorm = ({ item }) => {
    return <ViolationComponentOfStudent data={item} />;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.btnAdd}>
        <Text style={{ color: COLORS.white }}>
          Danh sách vi phạm của sinh viên
        </Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={dataRepair}
        renderItem={renderRegisterDorm}
        keyExtractor={(item) => item.idViPham.toString()}
      />
    </ScrollView>
  );
};

export default ViolationOfStudent;
