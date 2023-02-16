import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const widthScreen = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.logo,
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 90,
    paddingVertical: 20,
    marginVertical: 6,
    marginHorizontal: 4,
  },
  idRepair: {
    backgroundColor: COLORS.yellow,
  },
  isBroken:{
    backgroundColor: COLORS.red
  }
  ,
  textNumberRoom: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textNameRoom: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
