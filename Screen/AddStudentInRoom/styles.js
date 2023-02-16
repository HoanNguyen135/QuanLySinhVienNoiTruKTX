import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const widthScreen = Dimensions.get("screen").width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  btnRegister:{
    marginTop: 15,
    width: widthScreen- 36,
    height: 46,
    backgroundColor: COLORS.logo,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 13,
    alignSelf: 'center'
  },
  textEdit:{
    fontSize: 13,
    color: COLORS.white,
  },
  boxInput: {
    flexDirection: "column",
  },
  boxText:{
    marginLeft: 18,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 10,
    fontSize: 15,
  },
  nameText:{
    fontSize: 15,
    marginTop:10
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
  }
});

export default styles;
