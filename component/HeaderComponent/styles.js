import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  containerSearch: {
    width: "100%",
    height: 90,
    backgroundColor: COLORS.logo,
  },
  top: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  title: {
    fontSize: 30,
    color: COLORS.white,
  },
  bottom: {
    flex: 1,
    paddingHorizontal: 20,

  },
  textMidle: {
    fontSize: 30,
    color: COLORS.white,
  },
  boxSearch: {
    padding: 0,
    borderColor: "#ffffff",
    borderRadius: 20,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 8,
  },
});

export default styles;
