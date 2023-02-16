import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect,useRef } from "react";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { UserGrid, Loading } from "../../component";
import { ScrollView } from "react-native-virtualized-view";
import { useSelector, useDispatch } from "react-redux";
import { fetchListStudentInRoom } from "../../store/slices/student";
import { StudentInRoom } from "../../component";
import { useRoute } from "@react-navigation/native";

import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import XLSX from "xlsx";
import { useNavigation } from "@react-navigation/native";
import { fetchAddStudentInRoomToFile } from "../../store/slices/student";
import { formatDateMySQL } from "../../help";

const ListStudentInRoom = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const route = useRoute();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const update = useSelector((states) => states.Student.update);

  const dataPhong = useRef( route.params.data);

  const { idKhu: idArea, idPhong: idRoom } = dataPhong.current;

  useEffect(() => {
    dispatch(fetchListStudentInRoom({ idArea, idRoom })).then((res) => {
      if (!res.error) {
        setLoading(false);
        setData(res.payload.data);
      }
    });
  }, [update]);


  const showListStudent = ({ item }) => {
    return <StudentInRoom data={item} dataRoom={route.params.data}/>;
  };

  // chọn file csv là render

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});

    if (result.type === "success") {
      FileSystem.readAsStringAsync(result.uri, {
        encoding: FileSystem.EncodingType.Base64,
      })
        .then((b64) => XLSX.read(b64, { type: "base64" }))
        .then((wb) => {
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
          var temp = [];

          for (let i = 1; i < data.length; i++) {
            temp.push({
              HoTen: data[i][0],
              MSV: data[i][1],
              NgaySinh: formatDateMySQL(data[i][2]),
              Sdt: data[i][3],
              GioiTinh: data[i][4],
              DanToc: data[i][5],
              CCCD: data[i][6],
              QueQuan: data[i][7],
              Khoa: data[i][8],
              Email: data[i][9],
              Lop: data[i][10],
              Dctt: data[i][11],
              HoTenBo: data[i][12],
              Sdt_Bo: data[i][13],
              HoTenMe: data[i][14],
              Sdt_Me: data[i][15],
              Email_Phuhuynh: data[i][16],
              id_TK: data[i][17],
              idPhong: data[i][18],
              idKhu: data[i][19],
            });
          }
          dispatch(fetchAddStudentInRoomToFile({ data: temp }));
        });
    }
  };

  const handleAddStudentInRoom = () => {
    navigation.navigate("AddStudentInRoomScreen", {data: route.params.data, idArea, idRoom });
  };


  const handleEditRoom = () => {
    navigation.navigate("InfoRoomScreen", { data: route.params.data });
  };

  const handleGoInfrastructure = () => {
    navigation.navigate("ListInfrastructureInRoom", { idArea, idRoom });
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.btnAddRoom}
        onPress={handleAddStudentInRoom}
      >
        <Text style={styles.textAddRoom}>Thêm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnEditRoom} onPress={handleEditRoom}>
        <Text style={styles.textEditRoom}>Sửa thông tin phòng</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnAddStudents} onPress={pickDocument}>
        <Text style={styles.textAddRoom}>Thêm từ file</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnGoInfrastructure}
        onPress={handleGoInfrastructure}
      >
        <Text style={styles.textAddRoom}>Quản lý cơ sở vật chất</Text>
      </TouchableOpacity>
      <FlatList
        listKey={(item) => item.idSV.toString()}
        renderItem={showListStudent}
        data={data}
      />
    </ScrollView>
  );
};

export default ListStudentInRoom;
