import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { PriceGrid } from "../../component";
import { ScrollView } from "react-native-virtualized-view";
import { COLORS } from "../../contains";
import { useSelector, useDispatch } from "react-redux";
import { fetchListInfrastructure } from "../../store/slices/infrastructure";
import { useNavigation } from "@react-navigation/native";
import { fetchPrice } from "../../store/slices/electricandwater";

const PriceElectricAndWater = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const dataListInfrastructure = useSelector(
    (states) => states.Infrastructure.listInfrastructure
  );

  const Price = useSelector((states) => states.ElectricWater.price);

  const update = useSelector((states) => states.ElectricWater.update);

  useEffect(() => {
    dispatch(fetchPrice());
  }, [update]);

  const showElectricGrid = ({ item }) => {
    return <PriceGrid data={item} />;
  };

  return (
    <ScrollView style={{ backgroundColor: COLORS.background }}>
      <View style={styles.container}>
        <View style={styles.layout}>
          <View style={styles.layoutTitle}>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>Mã</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>Giá điện</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>Giá nước</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>Ngày tạo</Text>
            </View>
            <View style={[styles.column, styles.boxIcon]}>
              <View style={styles.column}>
                <Text style={styles.layoutTextHeader}>HĐ</Text>
              </View>
            </View>
          </View>
          <FlatList
            listKey={(item) => item.idGiaDienNuoc.toString()}
            renderItem={showElectricGrid}
            data={Price}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PriceElectricAndWater;
