import { Text, StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";
import { COLORS } from "../../contains";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 24,
    height: 75,
    backgroundColor: COLORS.white,
    marginTop: 14,
    borderRadius: 15,
    flexDirection: "column",
  },
  rowInfo: {
    flexDirection: "row",
    marginTop: 4,
  },
  stylePublic: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 6,
  },
  styleLeft: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 3,
  },
  styleRight: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0,
    marginRight: 3,
  },
});

export default styles;
