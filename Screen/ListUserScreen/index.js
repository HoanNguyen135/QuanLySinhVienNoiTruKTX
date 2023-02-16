import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { UserGrid, Loading } from "../../component";
import { ScrollView } from "react-native-virtualized-view";
import { useSelector, useDispatch } from "react-redux";
import { fetchListUser } from "../../store/slices/user";
import { useNavigation } from "@react-navigation/native";
import ModalDropdown from "react-native-modal-dropdown";
import UserService from "../../services/user";

const ListUserScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const navigation = useNavigation();

  const update = useSelector((states) => states.User.update);

  const dispatch = useDispatch();

  const user = useSelector((states) => states.User.user[0]);

  const [page, setPage] = useState();

  const handleSelect = (index, value) => {
    setPage(value);
  };

  const [arrPage, setArrPage] = useState([]);

  useEffect(() => {
    setLoading(true);
    UserService.getNumberPage().then((res) => {
      setArrPage(res.data.data);
      setPage(res.data.data[0]);
      setLoading(false);
    });
  }, [update]);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchListUser({ current_page: page })).then((res) => {
      if (!res.error) {
       
        if (user.ChucVu == "Giám đốc trung tâm nội trú") {
          setData(res.payload.data);
        } else if (user.ChucVu == "Phó giám đốc trung tâm nội trú") {
          setData(
            res.payload.data.filter((item) => {
              return item.ChucVu != "Giám đốc trung tâm nội trú";
            })
          );
        } else if (user.ChucVu == "Người quản lý") {
          setData(
            res.payload.data.filter((item) => {
              return item.ChucVu == "Sinh viên";
            })
          );
        }
        setLoading(false);
      }
    });
  }, [update, page]);

  const showListUser = ({ item }) => {
    return <UserGrid data={item} />;
  };

  if (loading) {
    return <Loading />;
  }

  const handleAddUser = () => {
    navigation.navigate("AddUserScreen");
  };

  const handleManagePermission = () => {
    navigation.navigate("ManagePermission");
  };

  return (
    <>
      <ScrollView style={styles.container}>
        {user.ChucVu != "Sinh viên" && (
          <TouchableOpacity style={styles.addUser} onPress={handleAddUser}>
            <Text style={styles.layoutTextHeader}>Thêm tài khoản</Text>
          </TouchableOpacity>
        )}
        {user.Quyen == "Tất cả" && (
          <TouchableOpacity
            style={styles.managePermission}
            onPress={handleManagePermission}
          >
            <Text style={styles.layoutTextHeader}>
              Quản lý người quản lý khu vực
            </Text>
          </TouchableOpacity>
        )}
        <View style={styles.layout}>
          <View style={styles.layoutGrid}>
            <View style={styles.stt}>
              <Text style={styles.layoutTextHeader}>Mã</Text>
            </View>
            <View style={styles.userName}>
              <Text style={styles.layoutTextHeader} numberOfLines={1}>
                Tên tài khoản
              </Text>
            </View>
            <View style={styles.position}>
              <Text style={styles.layoutTextHeader}>Chức vụ</Text>
            </View>
            <View style={[styles.boxIcon]}>
              <Text style={styles.layoutTextHeader}>HĐ</Text>
            </View>
          </View>
          <FlatList
            listKey={(item) => item.id.toString()}
            renderItem={showListUser}
            data={data}
          />
        </View>
      </ScrollView>
      <ModalDropdown
        options={arrPage}
        style={styles.modelDrop}
        onSelect={(index, value) => handleSelect(index, value)}
      >
        <Text>{page}</Text>
      </ModalDropdown>
    </>
  );
};

export default ListUserScreen;
