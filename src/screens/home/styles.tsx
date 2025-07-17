import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'purple',
        alignContent: 'center'
    },
    img:{
        width:150,
        height:150,
        alignSelf: 'center', 
        marginTop: 50,
        marginBottom: 20
    },
    textName:{
        fontSize:30,
        color:'white',
        alignSelf:'center',
        marginBottom: 50
    },
    textSkills:{
        fontSize:20,
        marginTop:50,
        color:'white',
        backgroundColor:'black',
        alignSelf:'flex-end',
        padding:30,
        margin:10
    }
});
