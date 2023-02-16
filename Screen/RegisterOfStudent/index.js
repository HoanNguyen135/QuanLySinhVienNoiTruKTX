import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchDataRegisterInDorm } from "../../store/slices/applicationdorm";
import { RegisterDorm } from "../../component";
import styles from "./styles";

const RegisterOfStudent = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const Id = useSelector((states) => states.User.user[0].Id);

  const updateRegister = useSelector(
    (states) => states.Application.updateData
  );

  const dataRegisterInDorm = useSelector(
    (states) => states.Application.dataRegisterInDorm
  );

  useEffect(() => {
    dispatch(fetchDataRegisterInDorm({ Id }));
  }, [updateRegister]);

 
  const handleGoRegister = () => {
    navigation.navigate("RegisterInDormScreen", { Id });
  };

  if (dataRegisterInDorm.length > 0) {
    return (
      <View style={styles.container}>
        <View style={{ alignSelf: "center" }}>
          <RegisterDorm data={dataRegisterInDorm[0]} />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/nodata.png")}
          style={styles.img}
        />
        <Text style={styles.txt}>Bạn chưa đăng ký vui lòng đăng ký</Text>
        <TouchableOpacity style={styles.btnRegister} onPress={handleGoRegister}>
          <Text style={styles.txtRegis}>Đăng ký ở nội trú</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default RegisterOfStudent;
