import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from "../components/Header"
import Noticias from '../screen/Noticias';


const Stack = createNativeStackNavigator();


const NoticiasStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Home'
    screenOptions={
        ({routes}) => {
            return {
                header : () => <Header title= "Noticias"/>
            }
        }
    }       
>

  <Stack.Screen name="Noticias" component={Noticias} />

</Stack.Navigator>
  )
}

export default NoticiasStack

const styles = StyleSheet.create({})