import { FlatList, StyleSheet, View } from 'react-native'
import categorias from "../Data/categorias.json"
import CategoryItem from './CategoryItem'
import { colors } from '../Global/colors'


const Categorias = ({navigation, route}) => {
  return (
    <View>

      <FlatList 
      data={categorias}
      keyExtractor={item => item}
      renderItem={({item}) => <CategoryItem categorias={item} navigation={navigation} routes={route} /> }
  
      />
    </View>
  )
}

export default Categorias

const styles = StyleSheet.create({

 
  
})

