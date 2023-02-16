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
import { fetchUpdateUserManage } from "../../store/slices/user";
import { useNavigation } from "@react-navigation/native";
import { checkUpdate } from "../../store/slices/user";
import { FormatDate, formatDateMySQL } from "../../help";
import { fetchCancerUser } from "../../store/slices/user";
import { fetchListArea } from "../../store/slices/area";
import { Controller } from "react-hook-form";
import ModalDropdown from "react-native-modal-dropdown";
import { COLORS } from "../../contains";

const InfoUserManage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();

  const dispatch = useDispatch();

  const data = route.params.data;

  const [nameRoom, setNameRoom] = useState(data.TenKhu);

  const navigation = useNavigation();

  const [dataArea, setDataArea] = useState([]);

  useEffect(() => {
    dispatch(fetchListArea()).then((res) => {
      if (!res.error) {
        const dataListStudent = res.payload.data;
        const listNameArea = dataListStudent.map((item) => {
          return item.TenKhu;
        });
        setDataArea(listNameArea);
      }
    });
  }, []);

  const handleSelect = (index, value) => {
    setNameRoom(value);
  };

  const handleRegister = (datas) => {
    dispatch(
      fetchUpdateUserManage({ NameArea: datas.NameArea, Id: data.Id })
    ).then((res) => {
      navigation.navigate("ManagePermission");
    });
  };

  const handleDelete = () => {
    dispatch(
        fetchUpdateUserManage({ NameArea: 'Hủy phân công khu vực', Id: data.Id })
      ).then((res) => {
        navigation.navigate("ManagePermission");
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
          editable={false}
        />
        <Controller
          control={control}
          name={"NameArea"}
          rules={{ required: "Vui lòng nhập khu vực" }}
          defaultValue={nameRoom}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View style={styles.containerModal}>
              <View style={styles.boxInput}>
                <View style={styles.boxText}>
                  <Text style={styles.nameText}>Tên khu vực quản lý</Text>
                </View>
                <ModalDropdown
                  options={dataArea}
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
                    <Text>{nameRoom}</Text>
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
          inputName="Email"
          placehorder={"Nhập email"}
          rules={{ required: "Vui lòng nhập email" }}
          data={data.Email}
          editable={false}
        />
        <InputText
          control={control}
          inputName="Position"
          placehorder={"Nhập chức vụ"}
          rules={{ required: "Vui lòng nhập chức vụ" }}
          data={data.ChucVu}
          editable={false}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleRegister)}
        >
          <Text style={styles.textEdit}>Cập nhật</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnDelete} onPress={handleDelete}>
          <Text style={styles.textEdit}>Hủy phân công quản lý khu vực</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoUserManage;
