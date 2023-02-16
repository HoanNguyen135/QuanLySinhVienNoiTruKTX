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
import { fetchAddInfrastructure } from "../../store/slices/infrastructure";

const AddInfrastructureScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddStudentInRoom = (datas) => {
    dispatch(fetchAddInfrastructure(datas))
    .then((res) => {
      if (!res.error && res.payload.data.length > 0) {
        navigation.navigate("ListInfrastructureScreen");
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <InputText
          control={control}
          inputName="NameInfrastructure"
          placehorder={"Nhập tên cơ sở vật chất"}
          rules={{ required: "Vui lòng nhập tên cơ sở vật chất" }}
        />
        <InputText
          control={control}
          inputName="Price"
          placehorder={"Nhập giá tiền"}
          rules={{ required: "Vui lòng nhập giá tiền" }}
        />
        <InputText
          control={control}
          inputName="Describe"
          placehorder={"Nhập mô tả"}
          rules={{}}
        />
        <InputText
          control={control}
          inputName="Status"
          placehorder={"Nhập trạng thái"}
          rules={{ required: "Vui lòng nhập trạng thái" }}
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
          <Text style={styles.textEdit}>Thêm cơ sở vật chất</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddInfrastructureScreen;
