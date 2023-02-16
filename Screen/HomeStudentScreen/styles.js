import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const widthScreen = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  textHelloName: {
    fontWeight: "bold",
    position: "absolute",
    fontSize: 18,
    top: 32,
    left: 16,
  },
  boxRoom: {
    position: "absolute",
    top: 201,
    left: 49,
    width: 93,
    height: 91,
    backgroundColor: COLORS.white,
    transform: [
      {
        rotate: "35deg",
      },
    ],
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  infoRoom: {
    alignItems: "center",
    justifyContent: "center",
    transform: [
      {
        rotate: "-35deg",
      },
    ],
  },
  boxEDW: {
    position: "absolute",
    top: 201,
    right: 65,
    width: 93,
    height: 91,
    backgroundColor: COLORS.white,
    transform: [
      {
        rotate: "35deg",
      },
    ],
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  boxBreakLaw: {
    position: "absolute",
    top: 297,
    left: 135,
    width: 93,
    height: 91,
    backgroundColor: COLORS.white,
    transform: [
      {
        rotate: "35deg",
      },
    ],
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  boxBreakThing: {
    position: "absolute",
    top: 374,
    left: 49,
    width: 93,
    height: 91,
    backgroundColor: COLORS.white,
    transform: [
      {
        rotate: "35deg",
      },
    ],
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  boxUser: {
    position: "absolute",
    top: 374,
    right: 65,
    width: 93,
    height: 91,
    backgroundColor: COLORS.white,
    transform: [
      {
        rotate: "35deg",
      },
    ],
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
