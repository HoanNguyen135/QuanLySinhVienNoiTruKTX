import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const widthScreen = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
   
  },
  btnLogin: {
    marginTop: 34,
    width: 324,
    height: 46,
    backgroundColor: COLORS.logo,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  textLogin: {
    fontSize: 18,
    color: COLORS.white,
  },
});

export default styles;
