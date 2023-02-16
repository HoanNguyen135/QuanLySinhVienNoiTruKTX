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
import { fetchUpdatePrice } from "../../store/slices/electricandwater";
import { useNavigation } from "@react-navigation/native";
import { FormatDate, formatDateMySQL } from "../../help";

const InfoPrice = () => {
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
    dispatch(fetchUpdatePrice({ ...dataText }));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <InputText
          control={control}
          inputName="PriceElectric"
          placehorder={"Nhập giá tiền điện"}
          rules={{ required: "Vui lòng nhập giá tiền điện " }}
          data={data.giaDien.toString()}
        />
        <InputText
          control={control}
          inputName="PriceWater"
          placehorder={"Nhập giá tiền nước"}
          rules={{ required: "Vui lòng nhập giá tiền nước" }}
          data={data.giaNuoc.toString()}
        />
        <InputText
          control={control}
          inputName="Date_created"
          placehorder={"Nhập ngày tạo"}
          rules={{ required: "Vui lòng nhập ngày tạo" }}
          data={FormatDate(data.NgayTaoGiaDienNuoc)}
        />
        <InputText
          control={control}
          inputName="Date_update"
          placehorder={"Nhập ngày sửa"}
          rules={{ required: "Vui lòng nhập ngày sửa" }}
          data={FormatDate(data.NgaySua)}
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

export default InfoPrice;
