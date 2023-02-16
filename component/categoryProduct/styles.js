import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    titleCategory:{
        padding: 5,
        backgroundColor: 'orange',
        width: 150,
        marginBottom: 10
    },
    boxCategoryProduct:{
        marginRight: 14,
        justifyContent:'space-between',
        alignItems: 'center',
    },
    boxImg:{
        borderRadius: 12,
        width:100,
        height:100,
    },
    img:{
        borderRadius: 12,
        width:'100%',
        height:'100%'
    }
});

export default styles;