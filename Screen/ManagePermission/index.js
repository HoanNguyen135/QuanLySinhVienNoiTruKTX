import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { ManagePermissionGrid, Loading } from "../../component";
import { ScrollView } from "react-native-virtualized-view";
import { useSelector, useDispatch } from "react-redux";
import { fetchListUserPermission } from "../../store/slices/user";
import { useNavigation } from "@react-navigation/native";

const ManagePermission = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const navigation = useNavigation();

  const update = useSelector((states) => states.User.update);

  const dispatch = useDispatch();

  const user = useSelector((states) => states.User.user[0]);

  useEffect(() => {
    dispatch(fetchListUserPermission()).then((res) => {
      if (!res.error) {
        setLoading(false);
        setData(res.payload.data);
      }
    });
  }, [update]);

  const showListUser = ({ item }) => {
    return <ManagePermissionGrid data={item} />;
  };

  if (loading) {
    return <Loading />;
  }

  const handleAddUser = () => {
    navigation.navigate("AddUserManage");
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.managePermission} onPress={handleAddUser}>
        <Text style={styles.layoutTextHeader}>Thêm người quản lý khu vực</Text>
      </TouchableOpacity>
      <View style={styles.layout}>
        <View style={styles.layoutGrid}>
          <View style={styles.stt}>
            <Text style={styles.layoutTextHeader}>Mã TK</Text>
          </View>
          <View style={styles.userName}>
            <Text style={styles.layoutTextHeader} numberOfLines={1}>
              Tên tài khoản
            </Text>
          </View>
          <View style={styles.position}>
            <Text style={styles.layoutTextHeader}>Khu vực quản lý</Text>
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
  );
};

export default ManagePermission;
