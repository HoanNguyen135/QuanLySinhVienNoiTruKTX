import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";
import { Loading, Room } from "../../component";
import { useRoute } from "@react-navigation/native";
import { fetchListRoom } from "../../store/slices/room";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import ModalDropdown from "react-native-modal-dropdown";
import { COLORS } from "../../contains";
import FloorService from "../../services/floor";

const Rooms = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const dataArea = route.params.data;

  const [floor, setFloor] = useState("Tầng 1");
  const [dataRoom, setDataRoom] = useState([]);
  const [loading, setLoading] = useState(true);

  const [dataManage, setDataManage] = useState(["Tầng 1", "Tầng 2", "Tầng 3"]);

  const update = useSelector((states) => states.Room.update);
  const updateFloor = useSelector((states) => states.Area.updateFloor);
  const updateStudent = useSelector((states) => states.Student.update);

  useEffect(() => {
    dispatch(fetchListRoom({ data: { floor, idArea: dataArea.idKhu } })).then(
      (res) => {
        if (!res.error) {
          setLoading(false);
          setDataRoom(res.payload.data);
        }
      }
    );
  }, [floor, update, updateStudent]);

  if (dataArea.idKhu != 1) {
    useEffect(() => {
      FloorService.getDataFloor({ idArea: dataArea.idKhu }).then((res) => {
        var a = [];
        res.data.data.map((item) => {
          a.push(item.TenTang);
        });
        a.push("Thêm tầng");
        setDataManage(a);
      });
    }, [updateFloor]);
  }

  if(loading){
    return(<Loading/>)
  }

  const handleChangeValue = (index, value) => {
    if (value == "Thêm tầng") {
      navigation.navigate("AddFloor", { idArea: dataArea.idKhu });
    } else {
      setFloor(value);
    }
  };

  const renderRoom = ({ item }) => {
    return <Room data={item} />;
  };

  const handleAddRoom = () => {
    navigation.navigate("CreateRoomScreen", {
      idArea: dataArea.idKhu,
      floor: floor,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxRoom}>
        <ModalDropdown
          options={dataManage}
          style={styles.modelDrop}
          onSelect={(index, value) => {
            handleChangeValue(index, value);
          }}
          dropdownStyle={{ width: 100, marginLeft: 18 }}
          dropdownTextStyle={{ fontSize: 13, color: COLORS.black }}
        >
          <Text>{floor}</Text>
        </ModalDropdown>
        <View style={styles.boxIconHome}>
          <Ionicons name="home-outline" size={16} color="black" />
        </View>
        <TouchableOpacity style={styles.btnAddRoom} onPress={handleAddRoom}>
          <Text style={styles.textAddRoom}>Thêm</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        renderItem={renderRoom}
        numColumns={4}
        keyExtractor={(item) => item.idPhong.toString()}
        data={dataRoom}
        style={styles.listRoom}
      />
    </View>
  );
};

export default Rooms;
