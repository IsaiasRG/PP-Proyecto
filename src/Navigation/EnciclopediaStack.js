import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Header from "../components/Header"
import ItemListCategory from '../screen/ItemListCategory';


const Stack = createNativeStackNavigator();


const EnciclopediaStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Home'
    screenOptions={
        ({routes}) => {
            return {
                header : () => <Header title= {
                        routes.name === "Home" ? "Categorias" :
                        routes.name === "Categorias" ? "Criaturas" :
                        "Biografia"
                } />
            }
        }
    }       
>

  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="ItemList" component={ItemListCategory} />

</Stack.Navigator>
  )
}

export default EnciclopediaStack

const styles = StyleSheet.create({})