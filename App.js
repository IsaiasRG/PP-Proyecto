import { StyleSheet, View } from 'react-native';
import { colors } from './src/Global/colors';
import Home from './src/screen/Home';
import { useState } from 'react';
import {useFonts} from "expo-font"
import ItemListCategory from './src/screen/ItemListCategory';
import { StatusBar } from 'expo-status-bar';


const App = () => {

  const [categorySelected, setCategorySelected] = useState("")
  const [fontsLoaded] = useFonts({Josefina: require ("./assets/Fonts/JosefinSans-Italic.ttf")});
  if(!fontsLoaded) return null

  return (
    <StatusBar style={styles.bar}>
         <View style={styles.container}>
          {categorySelected ?
          <ItemListCategory categorias = {categorySelected} setCategorySelected={setCategorySelected} />
          :
          <Home setCategorySelected={setCategorySelected}/>
        }
          
            
         </View>
    </StatusBar>
  )
  
}

const styles = StyleSheet.create({
  bar:{
    backgroundColor: colors.statusbar1
  },
    container:{
      flex:1,
      backgroundColor: colors.color2,
      alignItems:"center",
      justifyContent:"flex-start"
      
    },
    Text:{
      color:colors.letra1,
    }

})

export default App

