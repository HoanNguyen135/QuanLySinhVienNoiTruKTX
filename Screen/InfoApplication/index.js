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
import { fetchUpdateStatus } from "../../store/slices/applicationdorm";
import { useNavigation } from "@react-navigation/native";
import { FormatDate } from "../../help";

const InfoApplicationScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();

  const dispatch = useDispatch();

  const data = route.params.data;

  const filter = route.params.filter;

  const Position = useSelector((states) => states.User.user[0].ChucVu);

  const navigation = useNavigation();

  const handleUpdate = (datas) => {
    dispatch(
      fetchUpdateStatus({ data: { Status: "Đã duyệt", idDonDK: data.idDonDK } })
    ).then((res) => {
      if (filter) {
        navigation.navigate("ResultFilterApplication", { data: filter });
      } else {
        if (!route.params?.update) {
          navigation.navigate("ListApplicationDorm");
        }else{
          navigation.navigate("SearchScreen");
        }
      }
    });
  };

  const handleDelete = () => {
    dispatch(
      fetchUpdateStatus({ data: { Status: "Từ chối", idDonDK: data.idDonDK } })
    ).then((res) => {
      if (!route.params?.update) {
        navigation.navigate("ListApplicationDorm");
      }else{
        navigation.navigate("SearchScreen");
      }
    });
  };

  if (Position !== "Sinh viên") {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <InputText
            control={control}
            inputName="FullName"
            placehorder={"Nhập họ tên"}
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
            inputName="Class"
            placehorder={"Nhập lớp"}
            rules={{ required: "Vui lòng nhập lớp" }}
            data={data.GioiTinh}
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
            inputName="Entity"
            placehorder={"Nhập đối tượng ưu tiên(Nếu không có nhập không)"}
            rules={{ required: "Vui lòng nhập đối tượng" }}
            data={data.DoiTuong}
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
            inputName="NumberPhone_Parent"
            placehorder={"Nhập số điện thoại phụ huynh"}
            rules={{ required: "Vui lòng nhập số điện thoại phụ huynh" }}
            data={data.Sdt_Phuhuynh.toString()}
          />
          <InputText
            control={control}
            inputName="Date_created"
            placehorder={"Nhập ngày tạo đơn"}
            rules={{ required: "Vui lòng nhập ngày tạo đơn" }}
            data={FormatDate(data.NgayTaoDon)}
          />
          <InputText
            control={control}
            inputName="Status"
            placehorder={"Nhập trạng thái"}
            rules={{ required: "Vui lòng nhập trạng thái" }}
            data={data.TrangThai}
          />
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={handleSubmit(handleUpdate)}
          >
            <Text style={styles.textEdit}>Chấp nhận đơn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDelete} onPress={handleDelete}>
            <Text style={styles.textEdit}>Từ chối đơn</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <InputText
            control={control}
            inputName="FullName"
            placehorder={"Nhập họ tên"}
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
            inputName="Class"
            placehorder={"Nhập lớp"}
            rules={{ required: "Vui lòng nhập lớp" }}
            data={data.GioiTinh}
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
            inputName="Entity"
            placehorder={"Nhập đối tượng ưu tiên(Nếu không có nhập không)"}
            rules={{ required: "Vui lòng nhập đối tượng" }}
            data={data.DoiTuong}
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
            inputName="NumberPhone_Parent"
            placehorder={"Nhập số điện thoại phụ huynh"}
            rules={{ required: "Vui lòng nhập số điện thoại phụ huynh" }}
            data={data.Sdt_Phuhuynh.toString()}
          />
          <InputText
            control={control}
            inputName="Date_created"
            placehorder={"Nhập ngày tạo đơn"}
            rules={{ required: "Vui lòng nhập ngày tạo đơn" }}
            data={FormatDate(data.NgayTaoDon)}
          />
          <InputText
            control={control}
            inputName="Status"
            placehorder={"Nhập trạng thái"}
            rules={{ required: "Vui lòng nhập trạng thái" }}
            data={data.TrangThai}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default InfoApplicationScreen;
