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
import { fetchUpdateAvatar } from "../../store/slices/profile";
import { fetchAddProfile } from "../../store/slices/profile";

const ProfileStudent = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const id_TK = useSelector((states) => states.User.user[0].Id);

  const data = useSelector((states) => states.Profile.dataProfile[0]);
  const update = useSelector((states) => states.Profile.update);

  useEffect(() => {
    dispatch(fetchAddProfile({ id_TK }));
  }, [update]);

  const [img, setImg] = useState();

  const handleUpdateAvatar = async () => {
    try {
      imgPicker(
        (image) => setImg(image),
        (Avatar, idSV) => updateToMysql(Avatar, idSV),
        { idSV: data.idHSSV }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const updateToMysql = ({ Avatar, idSV }) => {
    dispatch(fetchUpdateAvatar({ Avatar, idHSSV: idSV }));
  };

  const handleAddProfile = () => {
    navigation.navigate("AddProfileStudent", { id_TK });
  };

  if (!data) {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/nodata.png")}
          style={styles.img}
        />
        <Text style={styles.txt}>Bạn chưa có hồ sơ sinh viên</Text>
        <TouchableOpacity style={styles.btnRegister} onPress={handleAddProfile}>
          <Text style={styles.txtRegis}>Cập nhật hồ sơ sinh viên</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <ScrollView style={styles.boxInfo}>
        <TouchableOpacity style={styles.boxAvatar} onPress={handleUpdateAvatar}>
          <Image style={styles.imgAvatar} source={{ uri: data.AnhDaiDien }} />
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.btnEdit}
          onPress={handleUpdateInfoStudent}
        >
          <Text style={styles.textEdit}>Sửa thông tin</Text>
        </TouchableOpacity> */}
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
            <View style={[styles.boxIcon]}>
              <AntDesign name="team" size={14} color="black" />
            </View>
            <Text>{data.GioiTinh}</Text>
            <Text>Dân tộc: {data.DanToc}</Text>
          </View>
          <View style={styles.row}>
            <View style={[styles.boxIcon]}>
              <AntDesign name="idcard" size={14} color="black" />
            </View>
            <Text>CCCD/CMND: {data.CCCD}</Text>
          </View>
          <View style={styles.row}>
            <View style={[styles.boxIcon]}>
              <Ionicons name="ios-location-outline" size={14} color="black" />
            </View>
            <Text>Quê quán : {data.QueQuan}</Text>
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
      </ScrollView>
    );
  }
};

export default ProfileStudent;
