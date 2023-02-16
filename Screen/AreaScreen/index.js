import { View, Text, FlatList, Button, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { Area } from "../../component";
import { fetchListArea } from "../../store/slices/area";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../component";
import { useNavigation } from "@react-navigation/native";

const AreaScreen = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const update = useSelector((states) => states.Area.update);

  const create = useSelector((states) => states.Area.create);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchListArea()).then((res) => {
  //     if (!res.error) {
  //       setLoading(false);
  //       setData(res.payload.data);
  //     }
  //   });
  // }, [update,create]);

  ///comment
  const user = useSelector((states) => states.User.user[0]);

  useEffect(() => {
    dispatch(fetchListArea()).then((res) => {
      if (!res.error) {
        setLoading(false);
        if (user.Quyen == "Tất cả") {
          setData(res.payload.data);
        } else {
          setData(
            res.payload.data.filter((item) => {
              return item.idKhu == user.Quyen;
            })
          );
        }
      }
    });
  }, [update, create]);

  //console.log(data.filter((item)=> {return item.TenKhu=== user.Permission}))

  ///comment

  const renderArea = ({ item }) => {
    return <Area data={item} />;
  };

  const handleGoAddArea = () => {
    navigation.navigate("CreateAreaScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxContent}>
        {user.Quyen == "Tất cả" && (
          <TouchableOpacity style={styles.boxButton} onPress={handleGoAddArea}>
            <Text style={styles.textButton}>Thêm khu</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.textContent}>Các khu kí túc xá</Text>
      </View>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.idKhu.toString()}
          renderItem={renderArea}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default AreaScreen;
