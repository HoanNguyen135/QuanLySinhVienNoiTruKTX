import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  btnAddRoom:{
    position: 'relative',
    marginTop:20,
    marginLeft: 10,
    marginBottom:45,
    width: 150,
    height: 30,
    backgroundColor: COLORS.logo,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  textAddRoom:{
    color: COLORS.white
  },
  btnAddStudents:{
    position: 'absolute',
    right: 10,
    top:20,
    width: 150,
    height: 30,
    backgroundColor: COLORS.logo,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  btnEditRoom:{
    position: 'absolute',
    right: 10,
    top:60,
    width: 150,
    height: 30,
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  btnGoInfrastructure:{
    position: 'absolute',
    left: 10,
    top:60,
    width: 150,
    height: 30,
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  textEditRoom:{
    color: COLORS.white
  }
});

export default styles;
