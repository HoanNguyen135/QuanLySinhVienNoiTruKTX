import {StyleSheet} from "react-native"
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
    container:{
        width: 109,
        height: 55,
        backgroundColor: COLORS.logo,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    textButton:{
        fontSize: 16,
        color: COLORS.white,
    },
    active:{
        backgroundColor: COLORS.red
    }
});

export default styles;