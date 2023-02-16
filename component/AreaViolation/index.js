import { View, Text, Image, TouchableOpacity } from "react-native";
import React,{useEffect} from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const AreaViolation = ({data}) => {

  const navigation = useNavigation();

  const handleGoRoom = () => {
    navigation.navigate("RoomViolationScreen",{data});
  };

 

  return (
    <View style={styles.container} >
      <View style={styles.area}>
        <TouchableOpacity style={styles.boxImg} onPress={handleGoRoom}>
          <Image
            source={require("../../assets/images/Home.png")}
            style={styles.img}
          />
        </TouchableOpacity>
        <View style={styles.boxContent}>
          <Text style={styles.textContent}>{data.TenKhu}</Text>
        </View>
      </View>
    </View>
  );
};

export default AreaViolation;
