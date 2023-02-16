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
import { fetchRegisterInDorm } from "../../store/slices/applicationdorm";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { formatDateMySQL, FormatDate } from "../../help";

const RegisterInDorm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();

  const Id = route.params.Id;

  const handleRegister = (datas) => {
    dispatch(
      fetchRegisterInDorm({
        ...datas,
        Id,
        Date_created: FormatDate(Date.now()),
        Birthday: formatDateMySQL(datas.Birthday)
      })
    ).then((res) => {
      if (!res.error) {
        navigation.navigate("RegisterOfStudent");
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <InputText
          control={control}
          inputName="FullName"
          placehorder={"Nhập họ và tên"}
          rules={{ required: "Vui lòng nhập họ tên " }}
        />
        <InputText
          control={control}
          inputName="MSV"
          placehorder={"Nhập mã sinh viên"}
          rules={{ required: "Vui lòng nhập mã sinh viên" }}
        />
        <InputText
          control={control}
          inputName="Birthday"
          placehorder={"Nhập ngày sinh"}
          rules={{ required: "Vui lòng nhập ngày sinh" }}
        />
        <InputText
          control={control}
          inputName="Sex"
          placehorder={"Nhập giới tính"}
          rules={{ required: "Vui lòng nhập giới tính" }}
        />
        <InputText
          control={control}
          inputName="Class"
          placehorder={"Nhập lớp"}
          rules={{ required: "Vui lòng nhập lớp" }}
        />
        <InputText
          control={control}
          inputName="CCCD"
          placehorder={"Nhập số CMND/CCCD"}
          rules={{ required: "Vui lòng nhập số CMND/CCCD" }}
        />
        <InputText
          control={control}
          inputName="Address"
          placehorder={"Nhập hộ khẩu thường trú"}
          rules={{ required: "Vui lòng nhập hộ khẩu thường trú" }}
        />
        <InputText
          control={control}
          inputName="Entity"
          placehorder={"Nhập thông tin"}
          rules={{}}
        />
        <InputText
          control={control}
          inputName="PhoneNumber"
          placehorder={"Nhập số điện thoại cá nhân"}
          rules={{ required: "Vui lòng nhập số điện thoại cá nhân" }}
        />
        <InputText
          control={control}
          inputName="NumberPhone_Parent"
          placehorder={"Nhập số điện thoại gia đình"}
          rules={{ required: "Vui lòng nhập số điện thoại gia đình" }}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleRegister)}
        >
          <Text style={styles.textEdit}>Đăng ký đơn</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterInDorm;
