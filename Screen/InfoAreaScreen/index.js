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
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { fetchUpdateArea } from "../../store/slices/area";
import { useNavigation } from "@react-navigation/native";
import { FormatDate } from "../../help";

const InfoAreaScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();

  const dispatch = useDispatch();

  const data = route.params.data;

  const navigation = useNavigation();

  const handleUpdate = (data) => {
    dispatch(
      fetchUpdateArea({ data: { ...data, Id: route.params.data.idKhu } })
    ).then((res) => {
      navigation.navigate("AreaScreen");
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <InputText
          control={control}
          inputName="NameArea"
          placehorder={"Nhập tên khu"}
          rules={{ required: "Vui lòng nhập tên khu " }}
          data={data.TenKhu}
        />
        <InputText
          control={control}
          inputName="Describe"
          placehorder={"Nhập mô tả"}
          rules={{ required: "Vui lòng nhập mô tả" }}
          data={data.MoTaKhu}
        />
        <InputText
          control={control}
          inputName="Status"
          placehorder={"Nhập status"}
          rules={{ required: "Vui lòng nhập status" }}
          data={data.TrangThaiKhu}
        />
        <InputText
          control={control}
          inputName="Date_created"
          placehorder={"Nhập ngày tạo"}
          rules={{ required: "Vui lòng nhập ngày tạo" }}
          data={FormatDate(data.NgayTaoKhu)}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleUpdate)}
        >
          <Text style={styles.textEdit}>Cập nhật</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoAreaScreen;
