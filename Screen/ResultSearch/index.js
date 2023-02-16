import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import {
  HeaderComponent,
  ViolationComponent,
  StudentInRoom,
  RegisterDorm,
  UserComponent,
} from "../../component";

const data2 = [{ id: "3" }, { id: "4" }];

const ResultSearch = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const dataSearch = useSelector((states) => states.Search.listSearch);

  const dispatch = useDispatch();

  const screen = route.params.screen;

  const renderViolation = ({ item }) => {
    return <ViolationComponent data={item} update={true}/>;
  };

  const renderStudent = ({ item }) => {
    return <StudentInRoom data={item} update={true}/>;
  };

  const renderUser = ({ item }) => {
    return <UserComponent data={item} update={true}/>;
  };

  const renderRegisterInDorm = ({ item }) => {
    return <RegisterDorm data={item} update={true}/>;
  };

  switch (screen) {
    case "Vi phạm":
      return (
        <View style={styles.container}>
          <HeaderComponent
            textFind={"Nhập tên sinh viên hoặc msv"}
            screen={"Vi phạm"}
          />
          <FlatList
            style={styles.flatList}
            data={dataSearch}
            renderItem={renderViolation}
            keyExtractor={(item) => item.idViPham.toString()}
          />
        </View>
      );
    case "Sinh viên":
      return (
        <View style={styles.container}>
          <HeaderComponent
            textFind={"Nhập tên sinh viên hoặc msv"}
            screen={"Sinh viên"}
          />
          <FlatList
            style={styles.flatList}
            data={dataSearch}
            renderItem={renderStudent}
            keyExtractor={(item) => item.idSV.toString()}
          />
        </View>
      );
    case "Tài khoản":
      return (
        <View style={styles.container}>
          <HeaderComponent
            style={styles.flatList}
            textFind={"Nhập tên tài khoản hoặc email"}
            screen={"Tài khoản"}
          />
          <FlatList
            style={styles.flatList}
            data={dataSearch}
            renderItem={renderUser}
            keyExtractor={(item) => item.Id.toString()}
          />
        </View>
      );
    case "Đơn đăng ký":
      return (
        <View style={styles.container}>
          <HeaderComponent
            textFind={"Nhập tên sinh viên"}
            screen={"Đơn đăng ký"}
          />
          <FlatList
            style={styles.flatList}
            data={dataSearch}
            renderItem={renderRegisterInDorm}
            keyExtractor={(item) => item.idDonDK.toString()}
          />
        </View>
      );

    default:
      break;
  }
};

export default ResultSearch;
