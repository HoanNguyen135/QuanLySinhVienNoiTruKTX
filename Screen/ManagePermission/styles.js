import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const widthScreen = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#EBFBFF",
  },
  layout: {
    marginTop:50,
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
    height: 40
  },
  column: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  layoutTextHeader:{
    fontWeight: 'bold',
    color: COLORS.white
  },
  layoutGrid: {
    backgroundColor: COLORS.logo,
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth:1
  },
  column1:{
    width:50,
    justifyContent: "center",
    alignItems: "center",
  },
  boxIcon:{
    width: 50,
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
    alignItems: 'center',
  },
  userName:{
    width: 150,
    marginRight:10
  },
  position:{
    width: 100
  },
  layoutTextHeader:{
    color: COLORS.white
  },
  addUser:{
    width: 126,
    height: 30,
    backgroundColor: COLORS.logo,
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 9
  },
  managePermission:{
    position: 'absolute',
    width: 209,
    height: 30,
    backgroundColor: COLORS.red,
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 9,
    right: 0
  }
});

export default styles;
