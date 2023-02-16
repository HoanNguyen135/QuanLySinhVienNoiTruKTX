import { StyleSheet,Dimensions } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DFF3F8',
       
    },
    boxLogo:{
        position: 'relative',
        width: 164,
        height: 134,
        alignSelf: 'center',
        marginTop: 131,
        marginBottom: 31
    },
    imgLogo:{
        width: '100%',
        height: '100%',
    },
    textLogo:{
        alignSelf:'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    btnLogin:{
        marginTop: 34,
        width: 324,
        height: 46,
        backgroundColor: COLORS.logo,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    textLogin:{
        fontSize: 18,
        color: COLORS.white
    },
    btnRegister:{
        alignSelf: 'flex-end',
        marginRight: 6,
        marginTop: 36
    },
    textRegister:{
        fontSize: 18,
        textDecorationLine: 'underline',
        color: COLORS.logo
    },
    textRegister1:{
        fontSize: 18,
        textDecorationLine: 'underline',
        color: 'yellow'
    }
})

export default styles