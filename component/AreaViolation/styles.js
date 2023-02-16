import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const widthScreen = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    height: 200,
    marginTop:15,
  },
  area: {
    backgroundColor: COLORS.white,
    width: "100%",
    height: "100%",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    padding: 10,
    justifyContent:'center',
    alignItems: 'center'
  },
  boxImg: {
    width: "70%",
    height: "65%",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
  },
  boxContent: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textContent: {
    fontSize: 20,
    fontWeight: "600",
  },
  btnEdit:{
    position: 'absolute',
    right: 5,
    top: 5
  }
});

export default styles;
