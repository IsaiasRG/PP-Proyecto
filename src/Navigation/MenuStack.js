import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Header from "../components/Header"
import ItemListCategory from '../screen/ItemListCategory';


const Stack = createNativeStackNavigator();


const MenuStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Home'
    screenOptions={
        ({route}) => {
            return {
                header : () => <Header title= {
                        route.name === "Home" ? "Categorias" :
                        route.name === "Categorias" ? "Criaturas" :
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

export default MenuStack

const styles = StyleSheet.create({})