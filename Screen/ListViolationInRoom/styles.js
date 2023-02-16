import { Text, StyleSheet, View } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  },
  modelDrop: {
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: COLORS.logo,
    width: 70,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    borderRadius: 6
  },
  flatList: {
    position: "relative",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 12,
    zIndex: 1
  },
  btnAdd:{
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: COLORS.logo,
    width: 116,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    borderRadius: 6
  }
});

export default styles;
