import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import ApplicationDormServices from "../../services/applicationdorm";
import { COLORS } from "../../contains";

const ManageNumber = () => {
  const [SoDonChoDuyet, setSoDonChoDuyet] = useState();

  const [SoDonDaDuyet, setSoDonDaDuyet] = useState();

  const [SoDonDaHuy, setSoDonDaHuy] = useState();

  const [SoLuongSV, setSoLuongSV] = useState({});

  useEffect(() => {
    ApplicationDormServices.getManageNumber().then((res) => {
      setSoDonChoDuyet(res.data.dataNumberDonChoDuyet.SoDonChoDuyet);
      setSoDonDaDuyet(res.data.dataNumberDonDaDuyet.SoDonDaDuyet);
      setSoLuongSV(res.data.dataNumberPeople);
      setSoDonDaHuy(res.data.dataNumberDonDaHuy.SoDonDaHuy)
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: COLORS.logo,
          fontSize: 30,
          position: "absolute",
          top: 10,
          left: 10
        }}
      >
        Thống kê số lượng
      </Text>
      <View style={{width: '96%', alignSelf: 'center',marginTop: 60,backgroundColor: COLORS.logo,borderRadius:10}}>
        <Text style={{ fontSize: 23, marginLeft: 20,color:COLORS.white,paddingVertical:10 }}>
          Số lượng đơn chờ duyệt: {SoDonChoDuyet}
        </Text>
        <Text style={{ fontSize: 23, marginLeft: 20, marginTop: 10,color:COLORS.white,paddingVertical:10 }}>
          Số lượng đơn đã duyệt: {SoDonDaDuyet}
        </Text>
        <Text style={{ fontSize: 23, marginLeft: 20, marginTop: 10,color:COLORS.white,paddingVertical:10 }}>
          Số lượng đơn đã từ chối: {SoDonDaHuy}
        </Text>
        <Text style={{ fontSize: 23, marginLeft: 20, marginTop: 10,color:COLORS.white,paddingVertical:10 }}>
          Số lượng sinh viên : {SoLuongSV?.TongSoNguoi} / {SoLuongSV?.TongSo}
        </Text>

        
      </View>
    </View>
  );
};

export default ManageNumber;
