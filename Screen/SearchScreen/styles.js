import {StyleSheet,Dimensions} from "react-native"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    textContent:{
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 50
    },
    boxButton:{
        width: windowWidth - 70,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
    }
});

export default styles;