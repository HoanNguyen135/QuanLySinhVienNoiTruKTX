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
import { fetchUpdateRepair } from "../../store/slices/repair";
import { useNavigation } from "@react-navigation/native";
import { FormatDate, formatDateMySQL } from "../../help";

const InfoRepair = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();

  const dispatch = useDispatch();

  const data = route.params.data;

  const navigation = useNavigation();

  const handleUpdate = (dataText) => {
    dispatch(
      fetchUpdateRepair({
        data: {
          ...dataText,
          Date_created: formatDateMySQL(dataText.Date_created),
          idSuaChua: data.idSuaChua,
        },
      })
    ).then((res) => {
      if (!res.error) {
        navigation.navigate("ListRepairScreen");
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <InputText
          control={control}
          inputName="NameRoom"
          placehorder={"Nhập tên phòng"}
          rules={{ required: "Vui lòng nhập tên phòng " }}
          data={data.TenPhong}
          editable={false}
        />
        <InputText
          control={control}
          inputName="ContentRepair"
          placehorder={"Nhập nội dung sửa chữa"}
          rules={{ required: "Vui lòng nhập nội dung sửa chữa" }}
          data={data.NoiDung}
        />
        <InputText
          control={control}
          inputName="Describe"
          placehorder={"Nhập mô tả"}
          rules={{ required: "Vui lòng nhập mô tả" }}
          data={data.MoTaSuaChua}
        />
        <InputText
          control={control}
          inputName="FullName"
          placehorder={"Nhập họ tên người báo sửa"}
          rules={{ required: "Vui lòng nhập họ tên người báo sửa" }}
          data={data.NguoiBaoSua}
        />
        <InputText
          control={control}
          inputName="Status"
          placehorder={"Nhập status"}
          rules={{ required: "Vui lòng nhập status" }}
          data={data.TrangThaiSuaChua}
        />
        <InputText
          control={control}
          inputName="Date_created"
          placehorder={"Nhập ngày tạo"}
          rules={{ required: "Vui lòng nhập ngày tạo" }}
          data={FormatDate(data.NgayTaoSuaChua)}
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

export default InfoRepair;
