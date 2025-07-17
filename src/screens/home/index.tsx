import React from 'react'
import {View, Text, Linking, Image, TouchableOpacity} from 'react-native'
import { styles } from './styles'
import Profile from '../../../assets/profile.png'
import { ButtonLink } from '../../components/button-link';

export function Home({navigation}:any){
    function goToSkills(){
        navigation.navigate('Skills');
    }

    return(
        <View style={styles.container}>
             <Image style={styles.img}
                source={Profile}
            />
            <Text style={styles.textName}>MARCELO I DE PAULA</Text>
            <ButtonLink title='LINKDIN' url='https://www.linkedin.com/in/marceloipaula/' />
            <ButtonLink title='GITHUB' url='https://www.github.com/marceloipaula/' />
            <ButtonLink title='EMAIL' url='mailto:marceloipaula@yahoo.com.br' />
            <Text style={styles.textSkills} onPress={goToSkills}>SKILLs</Text>
           
        </View>
    )
}

