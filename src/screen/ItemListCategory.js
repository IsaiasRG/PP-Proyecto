import { FlatList, Pressable, StyleSheet, Text } from 'react-native';
import Buscador from '../components/Buscador';
import Header from '../components/Header';
import criaturas from "../Data/dinos.json"
import DinoItem from '../components/DinoItem';
import { Entypo } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { colors } from '../Global/colors';


const ItemListCategory = ({setCategorySelected}) => {

  const [keyword, setKeyword] = useState("")  
  const [product, setProduct] = useState(criaturas)

  useEffect (()=> {
    const productFiltrados = criaturas.filter(products => products.title.includes(keyword))
    setProduct(productFiltrados)
  }, {keyword})

  return (

    <>
        <Header />
        <Buscador keyword={keyword} setKeyword={setKeyword}/>
        <Pressable style={styles.regresar} onPress={()=> setCategorySelected("")}>
        <Entypo name="back" size={15} color={colors.letra1} />
          <Text style={styles.backButton}>Regresar</Text>
        </Pressable>
        <FlatList 
        data={product}
        keyExtractor={item => item.id}
        renderItem={({item}) => <DinoItem item={item}/>}
        />
    </>
    
  )
}

export default ItemListCategory

const styles = StyleSheet.create({

  regresar: {
    backgroundColor:colors.color1,
    padding:5,
    gap:20,
    margin:5,
    flexDirection:"row"
    
  },
  backButton:{
    color:colors.letra1,
    fontSize:15,
  }
})