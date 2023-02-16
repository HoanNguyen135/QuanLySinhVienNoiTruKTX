import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Controller } from "react-hook-form";
import React, { useState, useEffect } from "react";
import { InputText } from "../../component";
import styles from "./styles";
import { useForm } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import { FormatDate, formatDateMySQL } from "../../help";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import ModalDropdown from "react-native-modal-dropdown";
import { COLORS } from "../../contains";
import { fetchListStudentInRoom } from "../../store/slices/student";
import { fetchAddViolation } from "../../store/slices/violation";

const AddViolationScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const arrPage = [];

  const [MSV, setMSV] = useState();

  const [data, setData] = useState([]);

  const { idKhu, idPhong, nameRoom } = route.params.data;


  //co the loi xoa di la chay
  useEffect(() => {
    dispatch(fetchListStudentInRoom({ idArea: idKhu, idRoom: idPhong })).then(
      (res) => {
        if (!res.error) {
          const dataListStudent = res.payload.data;

          const listMSV = dataListStudent.map((item) => {
            return item.MSV;
          });

          setData(listMSV);
        }
      }
    );
  }, []);

  const handleSelect = (index, value) => {
    setMSV(value);
  };

  const handleAddStudentInRoom = (dataStudent) => {
    if (typeof dataStudent.Note === "undefined") {
      dataStudent.Note = "";
    }

    dispatch(
      fetchAddViolation({
        ...dataStudent,
        idKhu,
        idPhong,
        Date_created: formatDateMySQL(dataStudent.Date_created)
      })
    ).then((res) => {
      if (!res.error && res.payload.data.length > 0) {
        navigation.navigate("ListViolationInRoomScreen", {
          data: { idKhu, idPhong, TenPhong:nameRoom },
        });
      }
    });

    // dispatch(
    //   fetchAddStudentInRoom({
    //     MSV: dataStudent.MSV,
    //     Email: dataStudent.Email,
    //     idRoom: data.idRoom,
    //     idArea: data.idArea,
    //   })
    // ).then((res) => {
    //   if (!res.error && res.payload.data.length > 0) {
    //     navigation.navigate("ListStudentInRoomScreen", {
    //       data: { idArea: data.idRoom, idRoom: data.idRoom },
    //     });
    //   }
    // });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Controller
          control={control}
          name={"MSV"}
          rules={{ required: "Vui lòng nhập mã sinh viên" }}
          defaultValue={MSV}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View style={styles.containerModal}>
              <View style={styles.boxInput}>
                <View style={styles.boxText}>
                  <Text style={styles.nameText}>Mã sinh viên</Text>
                </View>
                <ModalDropdown
                  options={data}
                  style={styles.modelDrop}
                  onSelect={(index, value) => {
                    handleSelect(index, value), onChange(value);
                  }}
                  dropdownStyle={{ width: 100, marginLeft: 18 }}
                  dropdownTextStyle={{ fontSize: 13, color: COLORS.black }}
                >
                  <View
                    style={[
                      styles.inputText,
                      {
                        borderColor: error ? "red" : "orange",
                      },
                    ]}
                  >
                    <Text>{MSV}</Text>
                  </View>
                </ModalDropdown>
              </View>
              {error && (
                <View style={styles.boxError}>
                  <Text style={{ color: "red" }}>{error?.message}</Text>
                </View>
              )}
            </View>
          )}
        />
        <InputText
          control={control}
          inputName="ContentViolent"
          placehorder={"Nhập nội dung vi phạm"}
          rules={{ required: "Vui lòng nhập nội dung vi phạm" }}
        />
        <InputText
          control={control}
          inputName="Date_created"
          placehorder={"Nhập ngày vi phạm"}
          rules={{ required: "Vui lòng nhập ngày vi phạm" }}
        />
        <InputText
          control={control}
          inputName="Level"
          placehorder={"Nhập mức độ vi phạm"}
          rules={{ required: "Vui lòng nhập mức độ vi phạm" }}
        />
        <InputText
          control={control}
          inputName="Note"
          placehorder={"Nhập ghi chú"}
          //rules={{ required: "Vui lòng nhập ghi chú" }}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleAddStudentInRoom)}
        >
          <Text style={styles.textEdit}>Thêm vi phạm</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddViolationScreen;
