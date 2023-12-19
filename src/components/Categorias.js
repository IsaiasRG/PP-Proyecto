import { FlatList, StyleSheet, Text, View } from 'react-native'
import categorias from "../Data/categorias.json"
import CategoryItem from './CategoryItem'
import { colors } from '../Global/colors'


const Categorias = ({setCategorySelected}) => {
  return (
    <View>

      <FlatList 
      data={categorias}
      keyExtractor={item => item}
      renderItem={({item}) => <CategoryItem setCategorySelected={setCategorySelected} categorias={item}/> }
  
      />
    </View>
  )
}

export default Categorias

const styles = StyleSheet.create({

 
  
})
