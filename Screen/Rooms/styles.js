import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const widthScreen = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  boxRoom:{
    marginTop: 28,
    width: 290,
    height:40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxIconHome:{
    position: 'absolute',
    left: 10
  },
  boxNumberRoom:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  listRoom:{
    alignSelf: 'center',
  },
  btnAddRoom:{
    width: 72,
    height: 24,
    backgroundColor: COLORS.logo,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textAddRoom:{
    color: COLORS.white
  },
  modelDrop:{
   position: 'absolute',
   left: 50
  }
});

export default styles
