import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { InputText } from "../../component";
import styles from "./styles";
import { useForm } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { FormatDate, formatDateMySQL } from "../../help";
import { fetchUpdateViolation } from "../../store/slices/violation";
import * as MailComposer from "expo-mail-composer";
import showNotice from "../../help/ShowToast";
import { updataData } from "../../store/slices/search";

const InfoViolation = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();

  const dispatch = useDispatch();

  const data = route.params.data;

  const update = route.params.update;

  const [isAvailable, setIsAvailable] = useState(false);

  const navigation = useNavigation();

  const [dataMail, setDataMail] = useState(data);

  useEffect(() => {
    const checkAvailable = async () => {
      const isMailAvailable = MailComposer.isAvailableAsync();
      setIsAvailable(isMailAvailable);
    };
    checkAvailable();
  }, []);

  const handleRegister = (datas) => {
    setDataMail(datas);
    dispatch(
      fetchUpdateViolation({
        ...datas,
        idKhu: data.idKhu,
        idPhong: data.idPhong,
        Date_created: formatDateMySQL(datas.Date_created),
        idViPham: data.idViPham,
        idSV: data.idSV,
      })
    ).then((res) => {
      if (update) {
        dispatch(
          updataData({
            ...datas,
            idKhu: data.idKhu,
            idPhong: data.idPhong,
            Date_created: formatDateMySQL(datas.Date_created),
            idViPham: data.idViPham,
            idSV: data.idSV,
          })
        );
      }
    });
  };

  const handleSendToParent = () => {
    MailComposer.composeAsync({
      subject: `Thông báo vi phạm tới phụ huynh của sinh viên ${dataMail.HoTen}`,
      body: `Đây là thư thông báo lỗi vi phạm của sinh viên đang ở nội trú kí túc xá của trường Đại học Thủy Lợi\n\n Họ tên sinh viên: ${
        dataMail.HoTen
      } \n Mã sinh viên: ${dataMail.MSV}\nLớp: ${dataMail.Lop}\nLỗi vi phạm : ${
        dataMail.NoiDungViPham
      }\n Ngày vi phạm: ${FormatDate(dataMail.NgayViPham)}\n Mức độ vi phạm: ${
        dataMail.MucDo
      }\n\n Mong phụ huynh chú ý và nhắc nhở con em của mình để khắc phục lỗi vi phạm không để xảy ra lại.`,
      recipients: [`${dataMail.Email_Phuhuynh}`],
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <InputText
          control={control}
          inputName="FullName"
          placehorder={"Nhập họ và tên"}
          rules={{ required: "Vui lòng nhập họ và tên " }}
          data={data.HoTen}
          editable={false}
        />
        <InputText
          control={control}
          inputName="ContentViolent"
          placehorder={"Nhập nội dung vi phạm"}
          rules={{ required: "Vui lòng nhập nội dung vi phạm" }}
          data={data.NoiDungViPham}
        />
        <InputText
          control={control}
          inputName="Date_created"
          placehorder={"Nhập ngày vi phạm"}
          rules={{ required: "Vui lòng nhập ngày vi phạm" }}
          data={FormatDate(data.NgayViPham)}
        />
        <InputText
          control={control}
          inputName="MSV"
          placehorder={"Nhập mã sinh viên"}
          rules={{ required: "Vui lòng nhập mã sinh viên" }}
          data={data.MSV}
          editable={false}
        />
        <InputText
          control={control}
          inputName="Class"
          placehorder={"Nhập lớp"}
          rules={{ required: "Vui lòng nhập lớp" }}
          data={data.Lop}
          editable={false}
        />
        <InputText
          control={control}
          inputName="Level"
          placehorder={"Nhập mức độ vi phạm"}
          rules={{ required: "Vui lòng nhập mức độ vi phạm" }}
          data={data.MucDo}
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
          inputName="Email_Parent"
          placehorder={"Nhập email phụ huynh"}
          rules={{ required: "Vui lòng nhập email phụ huynh" }}
          data={data.Email_Phuhuynh}
          editable={false}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleRegister)}
        >
          <Text style={styles.textEdit}>Cập nhật</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnDelete} onPress={handleSendToParent}>
          <Text style={styles.textEdit}>Gửi vi phạm cho phụ huynh</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoViolation;
