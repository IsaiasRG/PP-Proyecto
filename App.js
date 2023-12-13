import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/Global/colors';
import Home from './src/screen/Home';

const App = () => {

  return (
         <View style={styles.container}>
            <Home />
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