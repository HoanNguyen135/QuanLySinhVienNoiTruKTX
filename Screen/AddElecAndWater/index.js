import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React,{useState} from "react";
import { InputText } from "../../component";
import styles from "./styles";
import { useForm } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import { FormatDate, formatDateMySQL } from "../../help";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchAddElecAndWater } from "../../store/slices/electricandwater";
import { Controller } from "react-hook-form";
import ModalDropdown from "react-native-modal-dropdown";
import { COLORS } from "../../contains";

const AddElectricAndWaterScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const data = route.params;

  const [userName, setUserName] = useState();

  const [dataManage, setDataManage] = useState(["Đã nộp", "Chưa nộp"]);

  const handleSelectUserName = (index, value) => {
    setUserName(value);
  };

  const handleAddStudentInRoom = (datas) => {
    dispatch(
      fetchAddElecAndWater({
        Date_created: formatDateMySQL(datas.Date_created),
        Rooms: datas.Room,
        NewNumberElectric: datas.NewNumberElectric,
        NewNumberWater: datas.NewNumberWater,
        Status: datas.Status,
        idKhu: data.idKhu,
      })
    );
    // .then((res)=>{
    //   if(!res.error && res.payload.data.length>0){
    //     navigation.navigate("ListStudentInRoomScreen",{data: { idArea: data.idRoom, idRoom: data.idRoom}})
    //   }
    // })
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <InputText
          control={control}
          inputName="Room"
          placehorder={"Nhập tên phòng"}
          rules={{ required: "Vui lòng nhập tên phòng" }}
        />
        <InputText
          control={control}
          inputName="NewNumberElectric"
          placehorder={"Nhập số điện mới"}
          rules={{ required: "Vui lòng nhập số điện mới" }}
        />
        <InputText
          control={control}
          inputName="NewNumberWater"
          placehorder={"Nhập số nước mới"}
          rules={{ required: "Vui lòng nhập số nước mới" }}
        />
        <Controller
          control={control}
          name={"Status"}
          rules={{ required: "Vui lòng chọn trạng thái" }}
          defaultValue={userName}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View style={styles.containerModal}>
              <View style={styles.boxInput}>
                <View style={styles.boxText}>
                  <Text style={styles.nameText}>Trạng thái</Text>
                </View>
                <ModalDropdown
                  options={dataManage}
                  style={styles.modelDrop}
                  onSelect={(index, value) => {
                    handleSelectUserName(index, value), onChange(value);
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
        <InputText
          control={control}
          inputName="Date_created"
          placehorder={"Nhập ngày tạo"}
          rules={{ required: "Vui lòng nhập ngày tạo" }}
          data={FormatDate(Date.now())}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleAddStudentInRoom)}
        >
          <Text style={styles.textEdit}>Thêm điện nước</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddElectricAndWaterScreen;
