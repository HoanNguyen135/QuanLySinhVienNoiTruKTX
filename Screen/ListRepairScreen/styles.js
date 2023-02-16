import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const widthScreen = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 2,
    backgroundColor: COLORS.background,
    marginTop: 20,
  },
  layout: {
    backgroundColor: COLORS.white,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  layoutTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.logo,
    height: 40,
  },
  column: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  layoutTextHeader: {
    fontWeight: "bold",
    color: COLORS.white,
  },
  btnAdd: {
    width: 142,
    height: 30,
    position: "relative",
    zIndex: 1,
    top: 13,
    backgroundColor: COLORS.logo,
    left: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  txtContent:{
    color: COLORS.logo
  },
  modelDrop:{
    marginRight:5,
    backgroundColor: COLORS.white,
    width: 30,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  
});

export default styles;
