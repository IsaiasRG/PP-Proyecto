
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {dinos} from "../Data/dinos.json"

const ItemDetail = ({routes}) => {

  const [product, setProduct] = ([])
  const {id} = routes.params

  useEffect (() => {
    const encontrarProducto = dinos.find(product => product.id === id)
    setProduct(encontrarProducto)
  }, {id})

  return (
    <View style={styles.container}>
      <Text>Contenido a rellenar</Text>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

