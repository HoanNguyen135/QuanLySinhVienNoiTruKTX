import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const widthScreen = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  boxAvatar: {
    marginTop:19,
    width: 115,
    height: 115,
    alignSelf: "center",
    borderRadius: 120,
    backgroundColor: 'white'
  },
  imgAvatar: {
    width: "100%",
    height: "100%",
    borderRadius: 120,
    backgroundColor: 'white'
  },
  btnEdit:{
    width: 107,
    height: 35,
    backgroundColor: COLORS.logo,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 11,
    marginBottom: 13
  },
  textEdit:{
    fontSize: 13
  },
  boxInfoPersonal:{
    marginTop: 20,
    flexDirection: 'column',
    width: widthScreen - 22,
    height: 140,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 11,
    marginBottom: 16
  },
  boxInfoContact:{
    flexDirection: 'column',
    width: widthScreen - 22,
    height: 160,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 11,
    marginBottom: 16
  },
  boxBreakRule:{
    flexDirection: 'column',
    width: widthScreen - 22,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 11,
    marginBottom: 16
  },
  boxInfoDorm:{
    flexDirection: 'column',
    width: widthScreen - 22,
    height: 90,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 11,
    marginBottom: 16
  },
  row:{
    flexDirection: 'row'
  },
  JustifyContent:{
    width: 250,
    justifyContent: 'space-between'
  },
  boxIcon:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxIconHome:{
    marginTop: 3
  },
  sentBreakRule:{
    position: 'absolute',
    width: 234,
    height: 19,
    backgroundColor: '#AB2525',
    justifyContent: 'center',
    alignItems: 'center',
    top:15,
    right: 10
  },
  textSentBreakRule:{
    fontSize: 13,
    textDecorationLine: 'underline'
  },


  boxInfo: {
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
});

export default styles;
