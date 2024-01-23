import { StyleSheet, View } from 'react-native'
import Categorias from '../components/Categorias'
import Count from '../components/Count'


const Home = ({navigation, routes}) => {


  return (
    <View style={styles.conteinerCount}> 
        <Count  /> 
        <Categorias navigation={navigation} routes={routes} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    
  conteinerCount:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    padding:10,
  }
})
