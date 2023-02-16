import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { InputText } from "../../component";
import styles from "./styles";
import { useForm } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { fetchCreateRoom } from "../../store/slices/room";
import { useNavigation } from "@react-navigation/native";
import { Controller } from "react-hook-form";
import ModalDropdown from "react-native-modal-dropdown";
import { COLORS } from "../../contains";

const CreateRoomScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();

  const idArea = route.params.idArea;

  const floor = route.params.floor;

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const [currentDate, setCurrentDate] = useState("");

  const [userName, setUserName] = useState();

  const [dataManage, setDataManage] = useState(['Hoạt động','Đang sửa chữa']);

  const handleSelectUserName = (index, value) => {
    setUserName(value);
  };


  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setCurrentDate(year + "/" + month + "/" + date);
  }, []);

  const handleAdd = (data) => {
      dispatch(fetchCreateRoom({ data: { ...data, Date_created: currentDate,idKhu:idArea,Floor: floor } }))
      .then(
        (res) => {
          if (!res.error) {
            navigation.navigate("RoomScreen", { data: { idKhu: idArea } });
          }
        }
      );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <InputText
          control={control}
          inputName="NameRoom"
          placehorder={"Nhập tên phòng"}
          rules={{ required: "Vui lòng nhập tên phòng " }}
        />
        <InputText
          control={control}
          inputName="NumberLimit"
          placehorder={"Nhập số lượng người"}
          rules={{ required: "Vui lòng nhập số lượng người" }}
        />
        <Controller
          control={control}
          name={"Status"}
          rules={{ required: "Vui lòng chọn trạng thái" }}
          defaultValue={userName}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View style={styles.containerModal}>
              <View style={styles.boxInput}>
                <View style={styles.boxText}>
                  <Text style={styles.nameText}>
                    Trạng thái
                  </Text>
                </View>
                <ModalDropdown
                  options={dataManage}
                  style={styles.modelDrop}
                  onSelect={(index, value) => {
                    handleSelectUserName(index, value), onChange(value);
                  }}
                  dropdownStyle={{ width: 100, marginLeft: 18 }}
                  dropdownTextStyle={{ fontSize: 13, color: COLORS.black }}
                >
                  <View
                    style={[
                      styles.inputText,
                      {
                        borderColor: error ? "red" : "orange",
                      },
                    ]}
                  >
                    <Text>{userName}</Text>
                  </View>
                </ModalDropdown>
              </View>
              {error && (
                <View style={styles.boxError}>
                  <Text style={{ color: "red" }}>{error?.message}</Text>
                </View>
              )}
            </View>
          )}
        />
        <InputText
          control={control}
          inputName="Describe"
          placehorder={"Nhập mô tả"}
          rules={{ required: "Vui lòng nhập mô tả" }}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleAdd)}
        >
          <Text style={styles.textEdit}>Thêm</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateRoomScreen;
