import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";


const widthScreen = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  layoutGrid: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth:1
  },
  column: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  column1:{
    width:50,
    justifyContent: "center",
    alignItems: "center",
  },
  boxIcon:{
    width: 90,
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
  },
  stt:{
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userName:{
    width: 150,
    marginRight:10
  },
  position:{
    width: 80
  },

});

export default styles;
