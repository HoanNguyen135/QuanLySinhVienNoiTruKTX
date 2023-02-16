import { View, Text, TouchableOpacity,Image } from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { COLORS } from "../../contains";

const HomeStudentScreen = () => {
  const navigation = useNavigation();

  const dataStudent = useSelector((states) => states.User.dataStudent);

  const handleGoManageUser = () => {
    navigation.navigate("ProfileStudent");
  };

  const handleGoArea = () => {
    navigation.navigate("RegisterOfStudent");
  };

  const handleGoToViolation = () => {
    navigation.navigate("ViolationOfStudent");
  };

  const handleGoRepair = () => {
    navigation.navigate("RepairOfStudent");
  };

  return (
    <View style={styles.container}>
      <View style={{height:190,borderRadius: 30,backgroundColor: COLORS.white}}>
      </View>
      <Text style={{color: COLORS.black,fontWeight: 'bold',fontSize: 16,position:'absolute',top:30,right:6}}>Chào mừng bạn đến với KTX TLU</Text>
      <Image source={require('../../assets/images/logoHello.png')} style={{width: 150,height:150,position: 'absolute',left:10,top:30,alignSelf: 'center'}}/>
      <TouchableOpacity style={styles.boxRoom} onPress={handleGoArea}>
        <View style={styles.infoRoom}>
          <Ionicons name="list" size={30} color="black" />
          <Text style={styles.textRoom}>Đơn đăng ký</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxEDW} onPress={handleGoManageUser}>
        <View style={styles.infoRoom}>
          <AntDesign name="user" size={30} color="black" />
          <Text style={styles.textRoom}>Hồ sơ sv</Text>
        </View>
      </TouchableOpacity>
      {dataStudent.length > 0 && (
        <>
          <TouchableOpacity
            style={styles.boxBreakThing}
            onPress={handleGoRepair}
          >
            <View style={styles.infoRoom}>
              <MaterialIcons name="dangerous" size={30} color="black" />
              <Text style={styles.textRoom}>Sửa chữa</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxUser} onPress={handleGoToViolation}>
            <View style={styles.infoRoom}>
              <MaterialIcons name="dangerous" size={30} color="black" />
              <Text style={styles.textRoom}>Vi phạm</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default HomeStudentScreen;
