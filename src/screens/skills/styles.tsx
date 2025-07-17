import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    list: {
        gap: 0,
        marginBottom:10
    },
    reviewItem: {
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 8,
    },
    skill: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
    },
    comment: {
        marginTop: 5,
        fontStyle: 'italic',
    },
    img:{
        width:80,
        height: 80,
        alignSelf: 'center', 
        marginTop: 5,
        marginBottom: 5,
        backgroundColor:'silver',
        borderRadius:50
    },
    textName:{
        fontSize:20,
        alignSelf:'center',
        marginBottom: 35,
        fontWeight:'bold'
    },
});
