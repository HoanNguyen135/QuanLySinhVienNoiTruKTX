import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  btnRegister:{
    width: 107,
    height: 35,
    backgroundColor: COLORS.logo,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 11,
    marginBottom: 13,
    alignSelf: 'center'
  },
  textEdit:{
    fontSize: 13,
    color: COLORS.white
  },
});

export default styles;
