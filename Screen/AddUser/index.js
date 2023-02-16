import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { InputText } from "../../component";
import { useForm } from "react-hook-form";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchAddUser } from "../../store/slices/user";
import ModalDropdown from "react-native-modal-dropdown";
import { Controller } from "react-hook-form";
import { COLORS } from "../../contains";
import { FormatDate, formatDateMySQL } from "../../help";

const AddUserScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [currentDate, setCurrentDate] = useState("");

  const user = useSelector((states) => states.User.user[0]);

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setCurrentDate(year + "/" + month + "/" + date);
  }, []);

  const [position, setPosition] = useState();

  const [data, setData] = useState([]);

  const handleSelect = (index, value) => {
    setPosition(value);
  };

  const handleLogin = (data) => {
    dispatch(
      fetchAddUser({
        data: { ...data, Date_created: formatDateMySQL(data.Date_created) },
      })
    ).then((res) => {
      if (!res.error) {
        navigation.navigate("ListUserScreen");
      }
    });
  };

  var dataPosition = [];

  switch (user?.ChucVu) {
    case "Giám đốc trung tâm nội trú":
      dataPosition = [
        "Sinh viên",
        "Người quản lý",
        "Phó giám đốc Trung tâm nội trú",
      ];
      break;
    case "Phó giám đốc trung tâm nội trú":
      dataPosition = ["Sinh viên", "Người quản lý"];
      break;
    case "Người quản lý":
      dataPosition = ["Sinh viên"];
      break;
    default:
      break;
  }

  return (
    <ScrollView style={styles.container}>
      <InputText
        control={control}
        inputName="Username"
        placehorder={"Nhập tên tài khoản"}
        rules={{ required: "Vui lòng nhập tài khoản " }}
      />
      <Controller
        control={control}
        name={"Position"}
        rules={{ required: "Vui lòng chọn chức vụ" }}
        defaultValue={position}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View style={styles.containerModal}>
            <View style={styles.boxInput}>
              <View style={styles.boxText}>
                <Text style={styles.nameText}>Chức vụ</Text>
              </View>
              <ModalDropdown
                options={dataPosition}
                style={styles.modelDrop}
                onSelect={(index, value) => {
                  handleSelect(index, value), onChange(value);
                }}
                dropdownStyle={{ width: 210, marginLeft: 18 }}
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
                  <Text>{position}</Text>
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
        rules={{ required: "Vui lòng nhập email " }}
      />
      <InputText
        control={control}
        inputName="Password"
        placehorder={"Nhập mật khẩu"}
        rules={{ required: "Vui lòng nhập mật khẩu " }}
      />
      <InputText
        control={control}
        inputName="Date_created"
        placehorder={"Nhập ngày tạo"}
        rules={{ required: "Vui lòng nhập ngày tạo " }}
        data={FormatDate(Date.now())}
      />
      <InputText
        control={control}
        inputName="Note"
        placehorder={"Nhập ghi chú"}
        rules={{ required: "Vui lòng nhập ghi chú " }}
      />
      <TouchableOpacity
        onPress={handleSubmit(handleLogin)}
        style={styles.btnLogin}
      >
        <Text style={styles.textLogin}>Thêm tài khoản</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddUserScreen;
