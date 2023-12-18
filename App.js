import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/Global/colors';
import Home from './src/screen/Home';
import { useState } from 'react';
import {useFonts} from "expo-font"
import { fonts } from './src/Global/fonts';
import ItemListCategory from './src/screen/ItemListCategory';


const App = () => {

  const [categorySelected, setCategorySelected] = useState("")
  const [fontsLoaded] = useFonts({Josefina: require ("./assets/Fonts/static/JosefinSans-Italic.ttf")});
  if(!fontsLoaded) return null

  return (
         <View style={styles.container}>
          {categorySelected ?
          <ItemListCategory categorias = {categorySelected} />
          :
          <Home setCategorySelected={setCategorySelected}/>
        }
          
            
         </View>
  )
  
}

const styles = StyleSheet.create({
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