import { View, Text } from "react-native";
import React,{useState} from "react";
import styles from "./styles";
import { ButtonFilter } from "../../component";

const FilterScreen = () => {
  const [active, setActive] = useState("");

  const handleActive = (title) => { 
        setActive(title)
   }

   console.log(active)

  return (
    <View style={styles.container}>
      <Text style={styles.textContent}>Chọn mục cần tìm kiếm</Text>
      <View style={styles.boxButton}>
        <ButtonFilter active={active} onPress={handleActive} title={"Vi phạm"}/>
        <ButtonFilter active={active} onPress={handleActive} title={"Sinh viên"}/>
        <ButtonFilter active={active} onPress={handleActive} title={"Tài khoản"}/>
        <ButtonFilter active={active} onPress={handleActive} title={"Đơn đăng ký"}/>
      </View>
    </View>
  );
};

export default FilterScreen;
