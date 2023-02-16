import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { InputText } from "../../component";
import { useForm } from "react-hook-form";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchUserLogin } from "../../store/slices/user";



const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    navigation.closeDrawer();
  });

  const handleLogin = (data) => {
    dispatch(
      fetchUserLogin({ Username: data.Username, Password: data.Password })
    );
  };

  const handleRegister = () => {
    navigation.navigate("RegisterAccountScreen");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxLogo}>
        <Image
          style={styles.imgLogo}
          source={require("../../assets/images/Logo_TLU.png")}
        />
      </View>
      <Text style={styles.textLogo}>KÍ TÚC XÁ ĐẠI HỌC THỦY LỢI</Text>
      <InputText
        control={control}
        inputName="Username"
        placehorder={"Nhập tên tài khoản"}
        rules={{ required: "Vui lòng nhập tài khoản " }}
      />
      <InputText
        control={control}
        inputName="Password"
        placehorder={"Nhập mã mật khẩu"}
        rules={{ required: "Vui lòng nhập mật khẩu " }}
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={handleSubmit(handleLogin)}
        style={styles.btnLogin}
      >
        <Text style={styles.textLogin}>Đăng nhập</Text>
      </TouchableOpacity>
      <View style={styles.btnRegister}>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.textRegister}>Đăng ký tài khoản</Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity onPress={handleRegister} style={styles.btnRegister}>
        
      </TouchableOpacity> */}
    </ScrollView>
  );
};

export default LoginScreen;
