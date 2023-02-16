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
import { FormatDate, formatDateMySQL } from "../../help";
import { fetchUpdateProfile } from "../../store/slices/profile";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const AddProfileStudent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const id_TK = useSelector((states) => states.User.user[0].Id);

  const handleAdd = (datas) => {
    dispatch(
      fetchUpdateProfile({
        ...datas,
        id_TK,
        Birthday: formatDateMySQL(datas.Birthday),
        Date_created: FormatDate(Date.now()),
      })
    ).then((res) => {
      if (!res.error) {
        navigation.navigate("ProfileStudent");
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
          inputName="Ethnic"
          placehorder={"Nhập dân tộc"}
          rules={{ required: "Vui lòng nhập dân tộc" }}
        />
        <InputText
          control={control}
          inputName="PhoneNumber"
          placehorder={"Nhập số điện thoại"}
          rules={{ required: "Vui lòng nhập số điện thoại" }}
        />
        <InputText
          control={control}
          inputName="CCCD"
          placehorder={"Nhập CCCD/CMND"}
          rules={{ required: "Vui lòng nhập CCCD/CMND" }}
        />
        <InputText
          control={control}
          inputName="Country"
          placehorder={"Nhập quê quán"}
          rules={{ required: "Vui lòng nhập quê quán" }}
        />
        <InputText
          control={control}
          inputName="Major"
          placehorder={"Nhập khoa"}
          rules={{ required: "Vui lòng nhập khoa" }}
        />
        <InputText
          control={control}
          inputName="Email"
          placehorder={"Nhập email"}
          rules={{ required: "Vui lòng nhập email" }}
        />
        <InputText
          control={control}
          inputName="Class"
          placehorder={"Nhập lớp"}
          rules={{ required: "Vui lòng nhập lớp" }}
        />
        <InputText
          control={control}
          inputName="Address"
          placehorder={"Nhập địa chỉ thường trú"}
          rules={{ required: "Vui lòng nhập địa chỉ thường trú" }}
        />
        <InputText
          control={control}
          inputName="Name_Father"
          placehorder={"Nhập họ tên bố"}
          rules={{ required: "Vui lòng nhập họ tên bố" }}
        />
        <InputText
          control={control}
          inputName="PhoneNumber_Father"
          placehorder={"Nhập số điện thoại bố"}
          rules={{ required: "Vui lòng nhập số điện thoại bố" }}
        />
        <InputText
          control={control}
          inputName="Name_Mother"
          placehorder={"Nhập họ tên mẹ"}
          rules={{ required: "Vui lòng nhập họ tên mẹ" }}
        />
        <InputText
          control={control}
          inputName="PhoneNumber_Mother"
          placehorder={"Nhập số điện thoại mẹ"}
          rules={{ required: "Vui lòng nhập số điện thoại mẹ" }}
        />
        <InputText
          control={control}
          inputName="Email_Parent"
          placehorder={"Nhập emai phụ huynh"}
          rules={{ required: "Vui lòng nhập emai phụ huynh" }}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleAdd)}
        >
          <Text style={styles.textEdit}>Cập nhật hồ hơ sinh viên</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddProfileStudent;
