import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";



const widthScreen = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  boxContent:{
    marginTop: 10
  },
  textContent:{
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20
  },
  textButton:{
    fontSize: 16,
    color:COLORS.white
  },
  boxButton:{
    width: 110,
    height: 30,
    position: 'absolute',
    right: 20,
    borderRadius: 6,
    backgroundColor: COLORS.logo,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  button:{
    
  }
});

export default styles
