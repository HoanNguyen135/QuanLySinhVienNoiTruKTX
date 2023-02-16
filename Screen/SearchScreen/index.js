import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { ButtonFilter } from "../../component";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { removeData } from "../../store/slices/search";

const SearchScreen = () => {
  const [active, setActive] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const update = useSelector((state) => state.User.update);

  const updateApplication = useSelector((state) => state.Application.update);

  useEffect(() => {
    dispatch(removeData());
  }, [update, updateApplication]);

  const handleActive = (title) => {
    setActive(title);
    navigation.navigate("ResultSearch", { screen: title });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textContent}>Chọn mục cần tìm kiếm</Text>
      <View style={styles.boxButton}>
        <ButtonFilter
          active={active}
          onPress={handleActive}
          title={"Vi phạm"}
        />
        <ButtonFilter
          active={active}
          onPress={handleActive}
          title={"Sinh viên"}
        />
        <ButtonFilter
          active={active}
          onPress={handleActive}
          title={"Tài khoản"}
        />
        <ButtonFilter
          active={active}
          onPress={handleActive}
          title={"Đơn đăng ký"}
        />
      </View>
    </View>
  );
};

export default SearchScreen;
