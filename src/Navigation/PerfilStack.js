import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from "../components/Header"
import MyProfile from '../screen/MyProfile';
import ImagenSelector from '../screen/ImagenSelector';



const Stack = createNativeStackNavigator();


const PerfilStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Perfil'
    screenOptions={
        () => {
            return {
                header : () => <Header title= "Mi perfil"/>
            }
        }
    }       
>

  <Stack.Screen name="Perfil" component={MyProfile} />
  <Stack.Screen name="ImagenSelector" component={ImagenSelector} />

</Stack.Navigator>
  )
}

export default PerfilStack

const styles = StyleSheet.create({})