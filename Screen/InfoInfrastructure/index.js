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
import { fetchUpdateInfrastructure } from "../../store/slices/infrastructure";
import { useRoute } from "@react-navigation/native";

const InfoInfrastructureScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const data = route.params.data;

  const handleEdit = (datas) => {
    dispatch(
      fetchUpdateInfrastructure({ data: { ...datas, idCsvc: data.idCsvc } })
    ).then((res) => {
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
          data={data.TenCsvc}
        />
        <InputText
          control={control}
          inputName="Price"
          placehorder={"Nhập giá tiền"}
          rules={{ required: "Vui lòng nhập giá tiền" }}
          data={data.GiaTien.toString()}
        />
        <InputText
          control={control}
          inputName="Describe"
          placehorder={"Nhập mô tả"}
          rules={{}}
          data={data.MoTaCsvc}
        />
        <InputText
          control={control}
          inputName="Status"
          placehorder={"Nhập trạng thái"}
          rules={{ required: "Vui lòng nhập trạng thái" }}
          data={data.TrangThai}
        />
        <InputText
          control={control}
          inputName="Date_created"
          placehorder={"Nhập ngày tạo"}
          rules={{ required: "Vui lòng nhập ngày tạo" }}
          data={FormatDate(data.NgayTaoCsvc)}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleEdit)}
        >
          <Text style={styles.textEdit}>Sửa cơ sở vật chất</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoInfrastructureScreen;
