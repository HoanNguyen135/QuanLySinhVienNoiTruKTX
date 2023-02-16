import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { ElectricGrid, WaterGrid } from "../../component";
import { ScrollView } from "react-native-virtualized-view";
import { useRoute } from "@react-navigation/native";
import { COLORS } from "../../contains";
import { MaterialIcons } from "@expo/vector-icons";
import ModalDropdown from "react-native-modal-dropdown";
import { useSelector, useDispatch } from "react-redux";
import { fetchNumberPage } from "../../store/slices/electricandwater";
import { fetchListElectricAndWater } from "../../store/slices/electricandwater";
import { useNavigation } from "@react-navigation/native";
import { Loading } from "../../component";

const WaterAndElectric = () => {
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const idKhu = route.params.data.idKhu;

  const dataElecAndWaterInPage = useSelector(
    (states) => states.ElectricWater.listElecWater
  );

  const update = useSelector((states) => states.ElectricWater.update);

  const [page, setPage] = useState();

  const handleSelect = (index, value) => {
    setPage(value);
  };

  const [arrPage, setArrPage] = useState([]);

  useEffect(() => {
    dispatch(fetchNumberPage({ idKhu })).then((res) => {
      setArrPage(res.payload.data);
      setPage(res.payload.data[0]);
    });
  }, [update]);

  useEffect(() => {
    dispatch(fetchListElectricAndWater({ current_page: page, idKhu })).then(
      (res) => {
        if (!res.error) {
          setLoading(false);
        }
      }
    );
  }, [page, update]);

  const showElectricGrid = ({ item }) => {
    return <ElectricGrid data={item} />;
  };

  const showWaterGrid = ({ item }) => {
    return <WaterGrid data={item} />;
  };

  const handleBackPage = () => {
    if (page <= 1) {
    } else {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < arrPage.length) {
      setPage(Number(page) + 1);
    } else {
    }
  };

  const handleAdd = () => {
    navigation.navigate("AddElectricAndWaterScreen", { idKhu });
  };

  if (loading) {
    return <Loading />;
  }

  if (dataElecAndWaterInPage.length <= 0) {
  }

  return (
    <ScrollView style={{ backgroundColor: COLORS.background }}>
      <TouchableOpacity style={styles.btnAdd} onPress={handleAdd}>
        <Text style={{ color: COLORS.white, fontSize: 13 }}>
          Thêm tiền điện nước
        </Text>
      </TouchableOpacity>
      {dataElecAndWaterInPage.length <= 0 ? (
        <Image
          style={{ alignSelf: "center", width: 350, height: 350 }}
          source={require("../../assets/images/nodata.png")}
        />
      ) : (
        <>
          <View style={styles.container}>
            <Text style={styles.txtContent}>Bảng tiền điện</Text>
            <View style={styles.layout}>
              <View style={styles.layoutTitle}>
                <View style={styles.column}>
                  <Text style={styles.layoutTextHeader}>TT</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.layoutTextHeader}>Phòng</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.layoutTextHeader}>Số cữ</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.layoutTextHeader}>Số mới</Text>
                </View>
                <View style={styles.column}>
                  <Text style={[styles.layoutTextHeader, { fontSize: 13.8 }]}>
                    Tổng tiền
                  </Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.layoutTextHeader}>Đã nộp</Text>
                </View>
                <View style={[styles.column, styles.boxIcon]}>
                  <View style={styles.column}>
                    <Text style={styles.layoutTextHeader}>HĐ</Text>
                  </View>
                </View>
              </View>
              <FlatList
                listKey={(item) => item.idDienNuoc.toString()}
                renderItem={showElectricGrid}
                data={dataElecAndWaterInPage}
              />
            </View>
          </View>
          <View style={styles.container}>
            <Text style={styles.txtContent}>Bảng tiền điện</Text>
            <View style={styles.layout}>
              <View style={styles.layoutTitle}>
                <View style={styles.column}>
                  <Text style={styles.layoutTextHeader}>TT</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.layoutTextHeader}>Phòng</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.layoutTextHeader}>Số cũ</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.layoutTextHeader}>Số mới</Text>
                </View>
                <View style={styles.column}>
                  <Text style={[styles.layoutTextHeader, { fontSize: 13.8 }]}>
                    Tổng tiền
                  </Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.layoutTextHeader}>Đã nộp</Text>
                </View>
                <View style={[styles.column, styles.boxIcon]}>
                  <View style={styles.column}>
                    <Text style={styles.layoutTextHeader}>HĐ</Text>
                  </View>
                </View>
              </View>
              <FlatList
                listKey={(item) => item.idDienNuoc.toString()}
                renderItem={showWaterGrid}
                data={dataElecAndWaterInPage}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              marginLeft: 250,
              marginBottom: 10,
              justifyContent: "space-evenly",
            }}
          >
            <ModalDropdown
              options={arrPage}
              style={styles.modelDrop}
              onSelect={(index, value) => handleSelect(index, value)}
            >
              <Text>{page}</Text>
            </ModalDropdown>
            <Text style={{ fontSize: 15 }}>
              {page} of {arrPage.length}
            </Text>
            <TouchableOpacity onPress={handleBackPage}>
              <MaterialIcons name="navigate-before" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNextPage}>
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default WaterAndElectric;
