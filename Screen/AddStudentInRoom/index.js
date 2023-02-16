import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { InputText } from "../../component";
import styles from "./styles";
import { useForm } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import { FormatDate, formatDateMySQL } from "../../help";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchAddStudentInRoom } from "../../store/slices/student";
import { Controller } from "react-hook-form";
import { COLORS } from "../../contains";
import ProfileService from "../../services/profileStudent";

const AddStudentInRoomScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const data = route.params;

  const [filterData, setFilterData] = useState([]);

  const [masterData, setMasterData] = useState();

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const fetchData = () => {
    ProfileService.getListProfileStudent().then((res) => {
      setFilterData(res.data.data)
      setMasterData(res.data.data)
    });
  };

  const handleAddStudentInRoom = () => {
    dispatch(
      fetchAddStudentInRoom({
        MSV: search,
        idRoom: data.idRoom,
        idArea: data.idArea,
      })
    ).then((res) => {
      if (!res.error && res.payload.data.length > 0) {
        navigation.navigate("ListStudentInRoomScreen", {
          data: { ...route.params.data },
        });
      }
    });
  };

  const onChangeValue = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.MSV ? item.MSV : "";
        const textData = text;
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(masterData);
      setSearch(text);
    }
  };

  const setValueStudent = (text) => {
    setSearch(text.MSV);
  };

  const renderStudent = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          height: 50,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          setValueStudent(item);
        }}
      >
        <Text>Mã sinh viên: {item.MSV}</Text>
        <Text>Họ và tên: {item.HoTen}</Text>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View style={{ height: 1.5, width: 900, backgroundColor: "black" }} />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <ScrollView style={styles.container}>
        <Controller
          control={control}
          name={"MSV"}
          rules={"Vui lòng nhập MSV"}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <View style={styles.container}>
              <View style={styles.boxInput}>
                <View style={styles.boxText}>
                  <Text style={styles.nameText}>Mã sinh viên</Text>
                </View>
                <TextInput
                  onBlur={onBlur}
                  value={search}
                  placeholder={"Vui lòng nhập mã sinh viên"}
                  onChangeText={(text) => {
                    onChangeValue(text);
                    onChange(text);
                  }}
                  style={[
                    styles.inputText,
                    {
                      borderColor: error ? "red" : "orange",
                    },
                  ]}
                />
              </View>
              {error && (
                <View style={styles.boxError}>
                  <Text style={{ color: "red" }}>{error.message}</Text>
                </View>
              )}
            </View>
          )}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleAddStudentInRoom)}
        >
          <Text style={styles.textEdit}>Thêm sinh viên vào phòng</Text>
        </TouchableOpacity>
      </ScrollView>

      <FlatList
        data={filterData}
        renderItem={renderStudent}
        ItemSeparatorComponent={ItemSeparatorView}
        style={{
          backgroundColor: "white",
          width: "98%",
          marginTop: 180,
          position: "absolute",
          borderWidth: 1,
          borderRadius: 10,
          paddingVertical: 2,
          marginLeft: 10,
          marginRight: 10,
          alignSelf: "center",
        }}
      />
    </SafeAreaView>
  );
};

export default AddStudentInRoomScreen;
