import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { InputText } from "../../component";
import { useForm } from "react-hook-form";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchCreateAccount } from "../../store/slices/user";
import { COLOR } from "react-native-grading/Grading/GradingConstants";
import { COLORS } from "../../contains";

const RegisterAccountScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setCurrentDate(year + "/" + month + "/" + date);
  }, []);

  const handleLogin = (data) => {
    dispatch(fetchCreateAccount({ data: { ...data, Date: currentDate } })).then(
      (res) => {
        if (!res.error && res.payload.message == "Tạo tài khoản thành công") {
          navigation.navigate("LoginScreen");
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{marginTop:20,fontSize: 31,color:COLORS.logo,alignSelf: 'center',fontWeight: 'bold'}}>
        Đăng ký tài khoản
      </Text>
      <InputText
        control={control}
        inputName="Username"
        placehorder={"Nhập tên tài khoản"}
        rules={{ required: "Vui lòng nhập tài khoản " }}
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
      <TouchableOpacity
        onPress={handleSubmit(handleLogin)}
        style={styles.btnLogin}
      >
        <Text style={styles.textLogin}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterAccountScreen;
