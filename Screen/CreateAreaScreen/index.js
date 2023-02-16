import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React,{useState,useEffect} from "react";
import { InputText } from "../../component";
import styles from "./styles";
import { useForm } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { fetchCreateArea } from "../../store/slices/area";
import { useNavigation } from "@react-navigation/native";

const CreateAreaScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setCurrentDate(year + "/" + month + "/" + date);
  }, []);

  const handleAdd = (data) => {
    dispatch(fetchCreateArea({ data: { ...data, Date_created: currentDate } })).then(
      (res) => {
        if (!res.error) {
          navigation.navigate("AreaScreen");
        }
      }
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <InputText
          control={control}
          inputName="NameArea"
          placehorder={"Nhập tên khu"}
          rules={{ required: "Vui lòng nhập tên khu " }}
        />
        <InputText
          control={control}
          inputName="Describe"
          placehorder={"Nhập mô tả"}
          rules={{ required: "Vui lòng nhập mô tả" }}
        />
        <InputText
          control={control}
          inputName="Status"
          placehorder={"Nhập trạng thái"}
          rules={{ required: "Vui lòng nhập trạng thái" }}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleAdd)}
        >
          <Text style={styles.textEdit}>Thêm</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAreaScreen;
