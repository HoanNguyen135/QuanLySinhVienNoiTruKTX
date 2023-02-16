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
import { fetchAddFloor } from "../../store/slices/area";
import { useNavigation } from "@react-navigation/native";
import { Controller } from "react-hook-form";
import ModalDropdown from "react-native-modal-dropdown";
import { COLORS } from "../../contains";

const AddFloor = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();

  const idArea = route.params.idArea;

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleAdd = (data) => {
    dispatch(fetchAddFloor({ idArea: idArea, NameFloor: data.NameFloor }));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <InputText
          control={control}
          inputName="NameFloor"
          placehorder={"Nhập tên tầng"}
          rules={{ required: "Vui lòng nhập tên tầng " }}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleAdd)}
        >
          <Text style={styles.textEdit}>Thêm tầng</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddFloor;
