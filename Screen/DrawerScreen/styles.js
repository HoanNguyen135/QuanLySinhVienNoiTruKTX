import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'orange',
        borderBottomRightRadius: 80
    },
    boxAvatar:{
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginLeft: 3,
        marginRight: 3
    },
    imgAvatar:{
        width: '100%',
        height: '100%',
        borderRadius: 100,
        resizeMode: 'center'
    },
    info:{
        justifyContent: 'center',
        alignContent: 'center',
    },
    infoName:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    body:{
        flex: 3
    }
});

export default styles;