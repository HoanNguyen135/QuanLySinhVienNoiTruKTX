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
import { fetchListUser, fetchAddUserManage } from "../../store/slices/user";
import UserService from "../../services/user";

const AddUserManage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const [nameRoom, setNameRoom] = useState();

  const [userName, setUserName] = useState();

  const navigation = useNavigation();

  const [dataArea, setDataArea] = useState([]);

  const [dataManage, setDataManage] = useState([]);

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

  useEffect(() => {
    UserService.getListUserMange().then((res) => {
      const dataListStudent = res.data.data;
      const listUserName = dataListStudent
        .filter((item) => item.ChucVu == "Người quản lý" && item.Quyen == "")
        .map((item) => {
          return item.TenTaiKhoan;
        });
      setDataManage(listUserName);
    });
  }, []);

  const handleSelect = (index, value) => {
    setNameRoom(value);
  };

  const handleSelectUserName = (index, value) => {
    setUserName(value);
  };

  const handleRegister = (datas) => {
    dispatch(
      fetchAddUserManage({ NameArea: datas.NameArea, Username: datas.Username })
    ).then((res) => {
      if (!res.error) {
        navigation.navigate("ManagePermission");
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Controller
          control={control}
          name={"Username"}
          rules={{ required: "Vui lòng chọn tên tài khoản" }}
          defaultValue={userName}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View style={styles.containerModal}>
              <View style={styles.boxInput}>
                <View style={styles.boxText}>
                  <Text style={styles.nameText}>
                    Tên tài khoản người quản lý
                  </Text>
                </View>
                <ModalDropdown
                  options={dataManage}
                  style={styles.modelDrop}
                  onSelect={(index, value) => {
                    handleSelectUserName(index, value), onChange(value);
                  }}
                  dropdownStyle={{ width: 150, marginLeft: 18 }}
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
                    <Text>{userName}</Text>
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
        <Controller
          control={control}
          name={"NameArea"}
          rules={{ required: "Vui lòng chọn khu vực" }}
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
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleRegister)}
        >
          <Text style={styles.textEdit}>Phân công quản lý khu vực</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddUserManage;
