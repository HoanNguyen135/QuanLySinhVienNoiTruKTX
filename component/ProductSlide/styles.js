import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const widthScreen = Dimensions.get('screen').width-20;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: 'white',
    height: 200,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent:'center',
    width:widthScreen,
    marginLeft: 10
  },
  slider:{
    width: '100%',
    borderRadius:20
  },
  img:{
    width: '100%',
    height: '100%',
    borderRadius: 20,
    resizeMode: 'cover'
  },
  pagination:{
    top: '70%',
    position: 'absolute'
  }
});

export default styles;
