import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Categorias from '../components/Categorias'



const Home = ({setCategorySelected}) => {
  return (
    <>

    <Header title="Secciones"/>
    <Categorias setCategorySelected={setCategorySelected}/>

    </>
  )
}

export default Home

const styles = StyleSheet.create({
    
    
})