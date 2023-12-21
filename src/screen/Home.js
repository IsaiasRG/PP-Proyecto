import { StyleSheet, Text, View } from 'react-native'
import Categorias from '../components/Categorias'



const Home = ({navigation, routes}) => {
  return (
    <>

    <Categorias navigation={navigation} routes={routes} />

    </>
  )
}

export default Home

const styles = StyleSheet.create({
    
    
})