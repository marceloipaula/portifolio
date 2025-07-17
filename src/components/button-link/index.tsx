import { Text, Linking, TouchableOpacity } from 'react-native'
import { styles } from './styles';

interface myButton {title:string, url:string}

export function ButtonLink(props:myButton){
   
   function goToLink(){
           Linking.openURL(props.url);
       }

    return (
        
        <TouchableOpacity onPress={goToLink}>
            <Text style={styles.buttons}>{props.title}</Text>
        </TouchableOpacity>
    )
}


