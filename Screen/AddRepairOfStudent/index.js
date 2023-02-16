import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { InputText } from "../../component";
import styles from "./styles";
import { useForm } from "react-hook-form";
import { FormatDate, formatDateMySQL } from "../../help";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchCreateRepairOfStudent } from "../../store/slices/repair";
import { useRoute } from "@react-navigation/native";

const AddRepairOfStudent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const { FullName, idPhong } = route.params;

  console.log(FullName, idPhong);

  const handleAddStudentInRoom = (datas) => {
    dispatch(fetchCreateRepairOfStudent({ ...datas, idPhong })).then((res) => {
      if (!res.error && res.payload.data.length > 0) {
        navigation.navigate("RepairOfStudent");
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <InputText
          control={control}
          inputName="FullName"
          data={FullName}
          editable={false}
        />
        <InputText
          control={control}
          inputName="ContentRepair"
          placehorder={"Nhập nội dung sửa chữa"}
          rules={{ required: "Vui lòng nhập nội dung sửa chữa" }}
        />
        <InputText
          control={control}
          inputName="Describe"
          placehorder={"Nhập mô tả"}
          rules={{ required: "Vui lòng nhập mô tả" }}
        />
        <InputText
          control={control}
          inputName="Date_created"
          placehorder={"Nhập ngày tạo"}
          rules={{ required: "Vui lòng nhập ngày tạo" }}
          data={FormatDate(Date.now())}
          editable={false}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleAddStudentInRoom)}
        >
          <Text style={styles.textEdit}>Báo sữa chữa</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddRepairOfStudent;
