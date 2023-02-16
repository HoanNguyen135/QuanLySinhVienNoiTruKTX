import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { Zocial } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { imgPicker } from "../../libs";
import { useSelector, useDispatch } from "react-redux";
import { fetchUpdateAvatar } from "../../store/slices/student";

const InfoStudent = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const dispatch = useDispatch();

  const data = route.params.data;
  const update = route.params.update;

  console.log(update);

  const [img, setImg] = useState(data.AnhDaiDien);

  const handleUpdateInfoStudent = () => {
    navigation.navigate("UpdateInfoStudentScreen", { data });
  };

  const handleUpdateAvatar = async () => {
    try {
      imgPicker(
        (image) => setImg(image),
        (Avatar, idSV) => updateToMysql(Avatar, idSV),
        { idSV: data.idSV }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const updateToMysql = ({ Avatar, idSV }) => {
    dispatch(fetchUpdateAvatar({ Avatar, idSV }));
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.boxAvatar} onPress={handleUpdateAvatar}>
        <Image style={styles.imgAvatar} source={{ uri: img }} />
      </TouchableOpacity>
      {update!==true && (
        <TouchableOpacity
          style={styles.btnEdit}
          onPress={handleUpdateInfoStudent}
        >
          <Text style={styles.textEdit}>Sửa thông tin</Text>
        </TouchableOpacity>
      )}
      <View style={styles.boxInfoPersonal}>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Zocial name="persona" size={14} color="black" />
          </View>
          <Text>Thông tin cá nhân</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Ionicons name="person-outline" size={14} color="black" />
          </View>
          <Text>Họ và tên : {data.HoTen}</Text>
        </View>
        <View style={[styles.row, styles.JustifyContent]}>
          <View style={[styles.boxIcon]}>
            <AntDesign name="phone" size={14} color="black" />
          </View>
          <Text>{data.Sdt}</Text>
          <View style={[styles.boxIcon, { marginLeft: 10 }]}>
            <AntDesign name="team" size={14} color="black" />
          </View>
          <Text>{data.GioiTinh}</Text>
          <Text style={{ marginLeft: 10 }}>Dân tộc: {data.DanToc}</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <AntDesign name="idcard" size={14} color="black" />
          </View>
          <Text>CCCD/CMND: 0{data.CCCD}</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Ionicons name="ios-location-outline" size={14} color="black" />
          </View>
          <Text style={{ marginRight: 16 }}>Quê quán : {data.QueQuan}</Text>
          <Text>Khoa : CNTT</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Fontisto name="email" size={14} color="black" />
          </View>
          <Text>Email : {data.Email}</Text>
        </View>
      </View>
      <View style={styles.boxInfoContact}>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Zocial name="persona" size={14} color="black" />
          </View>
          <Text>Thông tin liên hệ</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIconHome]}>
            <Ionicons name="home-outline" size={14} color="black" />
          </View>
          <Text style={styles.textAddress} numberOfLines={2}>
            Đ/c thường trú : {data.Dctt}
          </Text>
        </View>
        <View style={[styles.row]}>
          <View style={[styles.boxIcon]}>
            <AntDesign name="phone" size={14} color="black" />
          </View>
          <Text>Số điện thoại bố : {data.Sdt_Bo}</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Ionicons name="person-outline" size={14} color="black" />
          </View>
          <Text>Họ tên bố : {data.HoTenBo}</Text>
        </View>
        <View style={[styles.row]}>
          <View style={[styles.boxIcon]}>
            <AntDesign name="phone" size={14} color="black" />
          </View>
          <Text>Số điện thoại mẹ : {data.Sdt_Me}</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Ionicons name="person-outline" size={14} color="black" />
          </View>
          <Text>Họ tên mẹ : {data.HoTenMe}</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Fontisto name="email" size={14} color="black" />
          </View>
          <Text>Email : {data.Email_Phuhuynh}</Text>
        </View>
      </View>
      <View style={styles.boxInfoDorm}>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Zocial name="persona" size={14} color="black" />
          </View>
          <Text>Thông tin KTX</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Ionicons name="ios-location-outline" size={14} color="black" />
          </View>
          <Text> {data.TenKhu}</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Ionicons name="ios-location-outline" size={14} color="black" />
          </View>
          <Text>Phòng : {data.TenPhong}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default InfoStudent;
