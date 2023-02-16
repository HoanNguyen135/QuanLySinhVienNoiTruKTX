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
import { fetchUpdateUser } from "../../store/slices/user";
import { useNavigation } from "@react-navigation/native";
import { checkUpdate } from "../../store/slices/user";
import { FormatDate, formatDateMySQL } from "../../help";
import { fetchCancerUser } from "../../store/slices/user";

const InfoUserScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();

  const dispatch = useDispatch();

  const data = route.params.data;

  const navigation = useNavigation();

  const handleRegister = (data) => {

    console.log(data.Date_created);
    dispatch(
      fetchUpdateUser({ data: { ...data, Id: route.params.data.Id,Date_created: formatDateMySQL(data.Date_created) } })
    ).then((res) => {
      navigation.navigate("ListUserScreen");
    });
  };

  const handleDelete = () => {
    dispatch(fetchCancerUser({ Id: route.params.data.Id })).then((res) => {
      navigation.navigate("ListUserScreen");
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <InputText
          control={control}
          inputName="Username"
          placehorder={"Nhập tên tài khoản"}
          rules={{ required: "Vui lòng nhập tên tài khoản " }}
          data={data.TenTaiKhoan}
        />
        <InputText
          control={control}
          inputName="Password"
          placehorder={"Nhập mật khẩu"}
          rules={{ required: "Vui lòng nhập mật khẩu" }}
          data={data.MatKhau}
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
          inputName="Position"
          placehorder={"Nhập chức vụ"}
          rules={{ required: "Vui lòng nhập chức vụ" }}
          data={data.ChucVu}
        />
        <InputText
          control={control}
          inputName="Note"
          placehorder={"Nhập ghi chú"}
          rules={{ required: "Vui lòng nhập ghi chú" }}
          data={data.GhiChu}
        />
        <InputText
          control={control}
          inputName="Date_created"
          placehorder={"Nhập ngày tạo"}
          rules={{ required: "Vui lòng nhập ngày tạo" }}
          data={FormatDate(data.NgayTao)}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleRegister)}
        >
          <Text style={styles.textEdit}>Cập nhật</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnDelete} onPress={handleDelete}>
          <Text style={styles.textEdit}>Hủy tài khoản</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoUserScreen;
