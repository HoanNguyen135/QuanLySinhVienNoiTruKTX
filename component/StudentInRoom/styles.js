import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const widthScreen = Dimensions.get("screen").width

const styles = StyleSheet.create({
  container: {
    width:widthScreen - 10,
    height: 90,
    flexDirection: 'row',
    borderBottomColor: '#CACACA',
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    
  },
  boxAvatar:{
    width: 73,
    height: 73,
    borderRadius: 100
  },
  imgAvatar:{
    width: "100%",
    height: "100%",
    borderRadius: 100
  },
  infoStudent:{
    marginLeft: 5,
    justifyContent: 'space-between'
  },
  text:{
    fontSize: 15
  },
  textBirth:{
    marginBottom: 5
  },
  
});

export default styles;
