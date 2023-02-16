import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect,useState } from "react";
import { InputText } from "../../component";
import styles from "./styles";
import { useForm } from "react-hook-form";
import { FormatDate, formatDateMySQL } from "../../help";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchCreateRepair } from "../../store/slices/repair";
import { fetchListRoomRepair } from "../../store/slices/room";
import { Controller } from "react-hook-form";
import ModalDropdown from "react-native-modal-dropdown";
import {COLORS} from '../../contains'

const AddRepairScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const user = useSelector((states) => states.User.user[0]);

  const [dataRoom, setDataRoom] = useState([]);
  const [nameRoom, setNameRoom] = useState();

  useEffect(() => {
    if (user.Quyen == "Tất cả") {
      dispatch(fetchListRoomRepair({ idArea: "Tất cả" })).then((res) => {
        setDataRoom(res.payload.data.map((item)=> item.TenPhong));
      });
    } else {
      dispatch(fetchListRoomRepair({ idArea: user.Quyen })).then((res) => {
        setDataRoom(res.payload.data.map((item)=> item.TenPhong));
      });
    }
  }, []);

  const handleAddStudentInRoom = (datas) => {

    dispatch(fetchCreateRepair(datas)).then((res) => {
      if (!res.error && res.payload.data.length > 0) {
        if (res.payload.message == "Tên phòng không tồn tại") {
        } else {
          navigation.navigate("ListRepairScreen");
        }
      }
    });
  };

  const handleSelect = (index, value) => {
    setNameRoom(value);
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Controller
          control={control}
          name={"NameRoom"}
          rules={{ required: "Vui lòng chọn phòng" }}
          defaultValue={nameRoom}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View style={styles.containerModal}>
              <View style={styles.boxInput}>
                <View style={styles.boxText}>
                  <Text style={styles.nameText}>Tên phòng</Text>
                </View>
                <ModalDropdown
                  options={dataRoom}
                  style={styles.modelDrop}
                  onSelect={(index, value) => {
                    handleSelect(index, value), onChange(value);
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
                    <Text>{nameRoom}</Text>
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
          inputName="ContentRepair"
          placehorder={"Nhập nội dung sửa chữa"}
          rules={{ required: "Vui lòng nhập nội dung sửa chữa" }}
        />
        <InputText
          control={control}
          inputName="FullName"
          placehorder={"Nhập họ tên người báo sửa"}
          rules={{ required: "Vui lòng nhập họ tên người báo sửa" }}
        />
        <InputText
          control={control}
          inputName="Describe"
          placehorder={"Nhập mô tả sửa chữa"}
          rules={{ required: "Vui lòng nhập mô tả sửa chữa" }}
        />
        <InputText
          control={control}
          inputName="Status"
          placehorder={"Nhập trạng thái sửa chữa"}
          rules={{ required: "Vui lòng nhập trạng thái sửa chữa" }}
        />
        <InputText
          control={control}
          inputName="Date_created"
          placehorder={"Nhập ngày tạo"}
          rules={{ required: "Vui lòng nhập ngày tạo" }}
          data={FormatDate(Date.now())}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleAddStudentInRoom)}
        >
          <Text style={styles.textEdit}>Thêm sữa chữa</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddRepairScreen;
