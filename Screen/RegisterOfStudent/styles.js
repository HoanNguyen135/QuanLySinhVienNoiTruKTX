import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const widthScreen = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  img:{
    width: 350,
    height: 350,
    alignSelf: 'center'
  },
  txt:{
    alignSelf: 'center'
  },
  btnRegister:{
    alignSelf: 'center',
    marginTop: 20,
    width: 210,
    height:35,
    backgroundColor: COLORS.logo,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  txtRegis:{
    color: COLORS.white
  }
})

export default styles