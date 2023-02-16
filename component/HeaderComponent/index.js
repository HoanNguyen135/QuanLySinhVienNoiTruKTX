import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../contains";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { SearchBar } from "react-native-elements";
import { fetchSearch, removeData } from "../../store/slices/search";

const HeaderComponent = ({ textFind, screen }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const goBackHome = () => {
    dispatch(removeData());
    navigation.goBack();
  };

  const changePage = () => {
    switch (screen) {
      case "Vi phạm":
        dispatch(fetchSearch({ textFind: search, table: "Vi phạm" }));
        break;
      case "Sinh viên":
        dispatch(fetchSearch({ textFind: search, table: "Sinh viên" }));
        break;
      case "Đơn đăng ký":
        dispatch(fetchSearch({ textFind: search, table: "Đơn đăng ký" }));
        break;
      case "Tài khoản":
        dispatch(fetchSearch({ textFind: search, table: "Tài khoản" }));
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.containerSearch}>
      <View style={styles.top}>
        <TouchableOpacity onPress={goBackHome}>
          <Ionicons name="arrow-back" size={24} color={COLORS.white} />
        </TouchableOpacity>
        <View style={styles.bottom}>
          <View style={styles.boxSearch}>
            <SearchBar
              placeholder={textFind}
              onChangeText={(search) => setSearch(search)}
              value={search}
              containerStyle={styles.boxSearch}
              inputContainerStyle={styles.input}
              lightTheme
              onSubmitEditing={changePage}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderComponent;
