import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const widthScreen = Dimensions.get("screen").width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  containerModal:{
    marginTop: 10,
    flexDirection: 'column',
  },
  textEdit:{
    fontSize: 13,
    color: COLORS.white
  },
  modelDrop:{

  },
  boxText:{
    marginLeft: 18,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 10,
    fontSize: 15,
  },
  nameText:{
    fontSize: 15
  },
  boxInput: {
    flexDirection: "column",
  },
  inputText: {
    marginLeft: 18,
    width: widthScreen- 36,
    height: 46,
    padding: 2,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 15,
    backgroundColor: COLORS.white
  },
  boxError:{
    alignSelf: 'flex-start',
    marginLeft: 18
  },
  btnRegister:{
    width: 324,
    height: 46,
    backgroundColor: COLORS.logo,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 11,
    marginBottom: 13,
    alignSelf: 'center',
    marginTop: 25
  },
  textEdit:{
    fontSize: 18,
    color: COLORS.white
  },
  btnDelete:{
    width: 324,
    height: 46,
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 11,
    marginBottom: 13,
    alignSelf: 'center'
  }
});

export default styles;
