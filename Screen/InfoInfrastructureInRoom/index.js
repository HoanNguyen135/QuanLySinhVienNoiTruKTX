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
import { fetchUpdateInfrastructureInRoom } from "../../store/slices/infrastructure";
import { useRoute } from "@react-navigation/native";

const InfoInfrastructureInRoom = () => {
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
      fetchUpdateInfrastructureInRoom({
        data: { ...datas, idCsvcPhong: data.idCsvcPhong },
      })
    ).then((res) => {
      if (!res.error && res.payload.data.length > 0) {
        navigation.navigate("ListInfrastructureInRoom",{ idArea: data.idKhu, idRoom: data.idPhong });
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
          editable={false}
        />
        <InputText
          control={control}
          inputName="Price"
          placehorder={"Nhập giá tiền"}
          rules={{ required: "Vui lòng nhập giá tiền" }}
          data={data.GiaTien.toString()}
          editable={false}
        />
        <InputText
          control={control}
          inputName="Number"
          placehorder={"Nhập số lượng"}
          rules={{ required: "Vui lòng nhập số lượng" }}
          data={data.SoLuongCsvc.toString()}
        />
        <InputText
          control={control}
          inputName="NumberGood"
          placehorder={"Nhập số lượng còn tốt"}
          rules={{ required: "Vui lòng nhập số lượng còn tốt" }}
          data={data.SoLuongConTot.toString()}
        />
        <InputText
          control={control}
          inputName="NumberBad"
          placehorder={"Nhập số lượng đã hỏng"}
          rules={{ required: "Vui lòng nhập số lượng đã hỏng" }}
          data={data.SoLuongDaHong.toString()}
        />
        <InputText
          control={control}
          inputName="Note"
          placehorder={"Nhập ghi chú"}
          rules={{}}
          data={data.GhiChu}
        />
        <InputText
          control={control}
          inputName="Date_created"
          placehorder={"Nhập ngày tạo"}
          rules={{ required: "Vui lòng nhập ngày tạo" }}
          data={FormatDate(data.NgayTaoCsvcPhong)}
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

export default InfoInfrastructureInRoom;
