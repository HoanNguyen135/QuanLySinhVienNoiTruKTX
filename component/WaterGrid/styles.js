import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";


const widthScreen = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  layoutGrid: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth:1
  },
  column: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boxIcon:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  icon:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  layoutTextHeader:{
    color: COLORS.logo
  }
});

export default styles;
