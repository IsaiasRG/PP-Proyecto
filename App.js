import { StyleSheet, View, Text } from 'react-native';
import { colors } from './src/Global/colors';
import {useFonts} from "expo-font"
import { StatusBar } from 'expo-status-bar';
import Navigation from './src/Navigation/Navigation';
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import Home from './src/screen/Home';


const App = () => {

  const [fontsLoaded] = useFonts({Josefina: require ("./assets/Fonts/JosefinSans-Italic.ttf")});
  if(!fontsLoaded) return null

  return (
    <View style={styles.container}>

           <StatusBar style={styles.bar}/>
           <Provider store={store}>
            <Home />
            <Navigation />

           </Provider>,

    </View>
  
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

