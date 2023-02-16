import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  btnAcceptAll:{
    position: 'absolute',
    top: 20,
    backgroundColor: COLORS.logo,
    width: 130,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    borderRadius: 10,
    left: 30
  },
  btnRejectAll:{
    position: 'absolute',
    top: 20,
    backgroundColor: COLORS.red,
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    borderRadius: 10,
    right: 30
  },
  txtAccept:{
    color: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 13
  },
})

export default styles