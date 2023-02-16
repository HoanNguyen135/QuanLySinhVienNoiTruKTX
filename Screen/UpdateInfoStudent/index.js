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
import { fetchUpdateInfoStudent } from "../../store/slices/student";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const UpdateInfoStudent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const data = route.params.data;

  const handleUpdate = (dataStudent) => {
    dispatch(
      fetchUpdateInfoStudent({
        ...dataStudent,
        idSV: data.idSV,
        Birthday: formatDateMySQL(dataStudent.Birthday),
      })
    ).then((res) => {
      if (!res.error) {
        navigation.navigate("InfoStudentScreen", {
          data: {
            ...res.payload.data,
            TenPhong: data.TenPhong,
            TenKhu: data.TenKhu,
          },
        });
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
          data={data.HoTen}
        />
        <InputText
          control={control}
          inputName="MSV"
          placehorder={"Nhập mã sinh viên"}
          rules={{ required: "Vui lòng nhập mã sinh viên" }}
          data={data.MSV}
        />
        <InputText
          control={control}
          inputName="Birthday"
          placehorder={"Nhập ngày sinh"}
          rules={{ required: "Vui lòng nhập ngày sinh" }}
          data={FormatDate(data.NgaySinh)}
        />
        <InputText
          control={control}
          inputName="Sex"
          placehorder={"Nhập giới tính"}
          rules={{ required: "Vui lòng nhập giới tính" }}
          data={data.GioiTinh}
        />
        <InputText
          control={control}
          inputName="Ethnic"
          placehorder={"Nhập dân tộc"}
          rules={{ required: "Vui lòng nhập dân tộc" }}
          data={data.DanToc}
        />
        <InputText
          control={control}
          inputName="PhoneNumber"
          placehorder={"Nhập số điện thoại"}
          rules={{ required: "Vui lòng nhập số điện thoại" }}
          data={data.Sdt}
        />
        <InputText
          control={control}
          inputName="CCCD"
          placehorder={"Nhập CCCD/CMND"}
          rules={{ required: "Vui lòng nhập CCCD/CMND" }}
          data={data.CCCD.toString()}
        />
        <InputText
          control={control}
          inputName="Country"
          placehorder={"Nhập quê quán"}
          rules={{ required: "Vui lòng nhập quê quán" }}
          data={data.QueQuan}
        />
        <InputText
          control={control}
          inputName="Major"
          placehorder={"Nhập khoa"}
          rules={{ required: "Vui lòng nhập khoa" }}
          data={data.Khoa}
        />
        <InputText
          control={control}
          inputName="Email"
          placehorder={"Nhập email"}
          rules={{ required: "Vui lòng nhập email" }}
          data={data.Email}
        />
        <InputText
          control={control}
          inputName="Class"
          placehorder={"Nhập lớp"}
          rules={{ required: "Vui lòng nhập lớp" }}
          data={data.Lop}
        />
        <InputText
          control={control}
          inputName="Address"
          placehorder={"Nhập địa chỉ thường trú"}
          rules={{ required: "Vui lòng nhập địa chỉ thường trú" }}
          data={data.Dctt}
        />
        <InputText
          control={control}
          inputName="Name_Father"
          placehorder={"Nhập họ tên bố"}
          rules={{ required: "Vui lòng nhập họ tên bố" }}
          data={data.HoTenBo}
        />
        <InputText
          control={control}
          inputName="PhoneNumber_Father"
          placehorder={"Nhập số điện thoại bố"}
          rules={{ required: "Vui lòng nhập số điện thoại bố" }}
          data={data.Sdt_Bo}
        />
        <InputText
          control={control}
          inputName="Name_Mother"
          placehorder={"Nhập họ tên mẹ"}
          rules={{ required: "Vui lòng nhập họ tên mẹ" }}
          data={data.HoTenMe}
        />
        <InputText
          control={control}
          inputName="PhoneNumber_Mother"
          placehorder={"Nhập số điện thoại mẹ"}
          rules={{ required: "Vui lòng nhập số điện thoại mẹ" }}
          data={data.Sdt_Me}
        />
        <InputText
          control={control}
          inputName="Email_Parent"
          placehorder={"Nhập emai phụ huynh"}
          rules={{ required: "Vui lòng nhập emai phụ huynh" }}
          data={data.Email_Phuhuynh}
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

export default UpdateInfoStudent;
