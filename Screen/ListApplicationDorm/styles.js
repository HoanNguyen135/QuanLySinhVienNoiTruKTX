import { Text, StyleSheet, View } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    
  },
  modelDrop:{
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: COLORS.white,
    width: 70,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },btnAcceptAll:{
    position: 'absolute',
    top: 20,
    backgroundColor: COLORS.logo,
    width: 130,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    borderRadius: 10,
    right: 150
  },
  btnRejectAll:{
    position: 'absolute',
    top: 20,
    backgroundColor: COLORS.red,
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    borderRadius: 10,
    right: 10
  },
  txtAccept:{
    color: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 13
  },
  flatList:{
    position:'relative',
    marginTop: 60,
    marginBottom: 10,
    marginLeft:12
  }
})

export default styles