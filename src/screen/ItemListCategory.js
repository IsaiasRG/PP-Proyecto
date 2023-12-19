import { FlatList, StyleSheet } from 'react-native';
import Buscador from '../components/Buscador';
import Header from '../components/Header';
import criaturas from "../Data/dinos.json"
import DinoItem from '../components/DinoItem';
import { useEffect, useState } from 'react';


const ItemListCategory = () => {

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
        <FlatList 
        data={product}
        keyExtractor={item => item.id}
        renderItem={({item}) => <DinoItem item={item}/>}
        />
    </>
    
  )
}

export default ItemListCategory

const styles = StyleSheet.create({})