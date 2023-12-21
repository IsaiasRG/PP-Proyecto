import { FlatList, Pressable, StyleSheet, Text } from 'react-native';
import Buscador from '../components/Buscador';
import criaturas from "../Data/dinos.json"
import DinoItem from '../components/DinoItem';
import { Entypo } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { colors } from '../Global/colors';


const ItemListCategory = ({navigation, routes}) => {

  const [keyword, setKeyword] = useState("")  
  const [product, setProduct] = useState(criaturas)

  useEffect (()=> {
    const productFiltrados = criaturas.filter(products => products.title.includes(keyword))
    setProduct(productFiltrados)
  }, {keyword})

  return (

    <>

        <Buscador keyword={keyword} setKeyword={setKeyword}/>
        
        <FlatList 
        data={product}
        keyExtractor={item => item.id}
        renderItem={({item}) => <DinoItem item={item} />}
        />
    </>
    
  )
}

export default ItemListCategory

const styles = StyleSheet.create({

})