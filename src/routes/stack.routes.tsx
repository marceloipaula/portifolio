import {createStackNavigator} from '@react-navigation/stack'
const {Navigator, Screen} = createStackNavigator();
import {Skills} from '../screens/skills'
import { Home } from '../screens/home';

export function StackRoutes(){
    return(
        <Navigator>
            <Screen 
                name='Home'
                component={Home}
            />

            <Screen 
                name='Skills'
                component={Skills}
            />
        </Navigator>
    )
}