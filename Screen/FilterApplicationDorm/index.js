import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { COLORS } from "../../contains";
import { useNavigation } from "@react-navigation/native";

const FilterApplicationDorm = () => {
  const navigation = useNavigation();

  const [isSinhVienKhuyetTat, setSinhVienKhuyetTat] = useState(false);

  const [isConThuongBinh, setConThuongBinh] = useState(false);

  const [isConBenhBinh, setConBenhBinh] = useState(false);

  const [isHoKhauVungCao, setHoKhauVungCao] = useState(false);

  const [isSinhVienDanToc, setSinhVienDanToc] = useState(false);

  const [isSinhVienMoCoi, setSinhVienMoCoi] = useState(false);

  const [isSinhVienNgheo, setSinhVienNgheo] = useState(false);

  const [isHoKhauTinhXa, setHoKhauTinhXa] = useState(false);

  const [isDiemTangDan, setDiemTangDan] = useState(false);

  const [isConLietSi, setConLietSi] = useState(false);

  const [isSinhVienCanNgheo, setSinhVienCanNgheo] = useState(false);

  const handleFilter = () => {
    navigation.navigate("ResultFilterApplication", {
      data: {
        isSinhVienKhuyetTat,
        isConThuongBinh,
        isHoKhauVungCao,
        isSinhVienDanToc,
        isSinhVienMoCoi,
        isSinhVienNgheo,
        isHoKhauTinhXa,
        isDiemTangDan,
        isConLietSi,
        isSinhVienCanNgheo,
        isConBenhBinh
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: 20,
          color: COLORS.logo,
        }}
      >
        Danh sách lọc đơn đăng ký
      </Text>
      <BouncyCheckbox
        style={{ marginTop: 16 }}
        size={25}
        fillColor="orange"
        unfillColor="#FFFFFF"
        text="Sinh viên khuyết tật"
        textStyle={{ color: "black" }}
        iconStyle={{ borderColor: "orange" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked) => {
          setSinhVienKhuyetTat(isChecked);
        }}
      />
       <BouncyCheckbox
        style={{ marginTop: 16 }}
        size={25}
        fillColor="orange"
        unfillColor="#FFFFFF"
        text="Con liệt sĩ"
        iconStyle={{ borderColor: "orange" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ color: "black" }}
        onPress={(isChecked) => {
          setConLietSi(isChecked);
        }}
      />
      <BouncyCheckbox
        style={{ marginTop: 16 }}
        size={25}
        fillColor="orange"
        unfillColor="#FFFFFF"
        text="Con thương binh"
        iconStyle={{ borderColor: "orange" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ color: "black" }}
        onPress={(isChecked) => {
          setConThuongBinh(isChecked);
        }}
      />
      
       <BouncyCheckbox
        style={{ marginTop: 16 }}
        size={25}
        fillColor="orange"
        unfillColor="#FFFFFF"
        text="Con bệnh binh"
        iconStyle={{ borderColor: "orange" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ color: "black" }}
        onPress={(isChecked) => {
          setConBenhBinh(isChecked);
        }}
      />
      <BouncyCheckbox
        style={{ marginTop: 16 }}
        size={25}
        fillColor="orange"
        unfillColor="#FFFFFF"
        text="Hộ khẩu thường trú tại vùng cao"
        iconStyle={{ borderColor: "orange" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ color: "black" }}
        onPress={(isChecked) => {
          setHoKhauVungCao(isChecked);
        }}
      />
      <BouncyCheckbox
        style={{ marginTop: 16 }}
        size={25}
        fillColor="orange"
        unfillColor="#FFFFFF"
        text="Sinh viên là người dân tộc thiểu số"
        iconStyle={{ borderColor: "orange" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ color: "black" }}
        onPress={(isChecked) => {
          setSinhVienDanToc(isChecked);
        }}
      />
      <BouncyCheckbox
        style={{ marginTop: 16 }}
        size={25}
        fillColor="orange"
        unfillColor="#FFFFFF"
        text="Sinh viên mồ côi"
        iconStyle={{ borderColor: "orange" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ color: "black" }}
        onPress={(isChecked) => {
          setSinhVienMoCoi(isChecked);
        }}
      />
      <BouncyCheckbox
        style={{ marginTop: 16 }}
        size={25}
        fillColor="orange"
        unfillColor="#FFFFFF"
        text="Sinh viên là con hộ nghèo"
        iconStyle={{ borderColor: "orange" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ color: "black" }}
        onPress={(isChecked) => {
          setSinhVienNgheo(isChecked);
        }}
      />
       <BouncyCheckbox
        style={{ marginTop: 16 }}
        size={25}
        fillColor="orange"
        unfillColor="#FFFFFF"
        text="Sinh viên là con hộ cận nghèo"
        iconStyle={{ borderColor: "orange" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ color: "black" }}
        onPress={(isChecked) => {
          setSinhVienCanNgheo(isChecked);
        }}
      />

      <BouncyCheckbox
        style={{ marginTop: 16 }}
        size={25}
        fillColor="orange"
        unfillColor="#FFFFFF"
        text="Sinh viên có hộ khẩu ở các tỉnh xa"
        textStyle={{ color: "black" }}
        iconStyle={{ borderColor: "orange" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked) => {
          setHoKhauTinhXa(isChecked);
        }}
      />
      {/* <BouncyCheckbox
        style={{ marginTop: 16 }}
        size={25}
        fillColor="orange"
        unfillColor="#FFFFFF"
        text="Điểm tăng dần"
        textStyle={{ color: "black" }}
        iconStyle={{ borderColor: "orange" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked) => {
          setDiemTangDan(isChecked);
        }}
      /> */}
      <TouchableOpacity style={styles.btnFilter} onPress={handleFilter}>
        <Text style={styles.txtFilter} >
          Lọc
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterApplicationDorm;
