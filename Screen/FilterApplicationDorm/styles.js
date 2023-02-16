import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  btnFilter: {
    marginTop: 20,
    width: 250,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.logo,
    borderRadius: 9,
    alignSelf: 'center'
  },
  txtFilter:{
    color: COLORS.white
  }
});

export default styles;
