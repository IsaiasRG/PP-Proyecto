import { FlatList, StyleSheet, Text, View } from 'react-native'
import categorias from "../Data/categorias.json"
import CategoryItem from './CategoryItem'


const Categorias = (setCategorySelected) => {
  return (
    <FlatList 
    data={categorias}
    keyExtractor={item => item}
    renderItem={({item}) => <CategoryItem setCategorySelected={setCategorySelected} categorias={item}/> }

    />
  )
}

export default Categorias

const styles = StyleSheet.create({

  
})