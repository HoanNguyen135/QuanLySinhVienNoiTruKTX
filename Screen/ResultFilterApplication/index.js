import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilterApplication } from "../../store/slices/applicationdorm";
import { RegisterDorm } from "../../component";
import styles from "./styles";
import { COLORS } from "../../contains";
import { ScrollView } from "react-native-virtualized-view";
import { fetchAcceptAllApplication } from "../../store/slices/applicationdorm";

const ResultFilterApplication = () => {
  const dispatch = useDispatch();

  const route = useRoute();

  const dataFilterApplication = useSelector(
    (states) => states.Application.dataFilter
  );

  const update = useSelector((states) => states.Application.update);

  const dataFilter = route.params.data;

  let arrFilter = [];

  if (dataFilter.isSinhVienNgheo) {
    arrFilter.push("Sinh viên là con hộ nghèo");
  }
  if (dataFilter.isConBenhBinh) {
    arrFilter.push("Con bệnh binh");
  }
  if (dataFilter.isSinhVienKhuyetTat) {
    arrFilter.push("Sinh viên khuyết tật");
  }
  if (dataFilter.isSinhVienMoCoi) {
    arrFilter.push("Sinh viên mồ côi");
  }
  if (dataFilter.isSinhVienDanToc) {
    arrFilter.push("Sinh viên dân tộc thiểu số");
  }
  if (dataFilter.isHoKhauVungCao) {
    arrFilter.push("Sinh viên vùng cao");
  }
  if (dataFilter.isHoKhauTinhXa) {
    arrFilter.push("Sinh viên có hộ khẩu ở tỉnh xa");
  }
  if (dataFilter.isConThuongBinh) {
    arrFilter.push("Con thương binh");
  }
  if (dataFilter.isConLietSi) {
    arrFilter.push("Con liệt sĩ");
  }
  if (dataFilter.isSinhVienCanNgheo) {
    arrFilter.push("Sinh viên là con hộ cận nghèo");
  }

  useEffect(() => {
    dispatch(fetchFilterApplication({ arrFilter }));
  }, [update]);

  const renderFilter = ({ item }) => {
    return <RegisterDorm data={item} filter={dataFilter} />;
  };

  const handleAcceptAll = () => {
    dispatch(
      fetchAcceptAllApplication({
        dataAccept: dataFilterApplication,
        type: "Đã duyệt",
      })
    );
  };

  const handleRejectAll = () => {
    dispatch(
      fetchAcceptAllApplication({
        dataAccept: dataFilterApplication,
        type: "Từ chối",
      })
    );
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.btnAcceptAll} onPress={handleAcceptAll}>
        <Text style={styles.txtAccept}>Chấp nhận danh sách</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnRejectAll} onPress={handleRejectAll}>
        <Text style={styles.txtAccept}>Từ chối danh sách</Text>
      </TouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{
          alignSelf: "center",
          position: "relative",
          marginTop: 60,
          marginBottom: 10,
        }}
        data={dataFilterApplication}
        keyExtractor={(item) => item.idDonDK.toString()}
        renderItem={renderFilter}
      />
    </ScrollView>
  );
};

export default ResultFilterApplication;
