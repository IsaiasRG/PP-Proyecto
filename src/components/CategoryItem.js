import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryItem = ({categorias, setCategorySelected}) => {
  return (
    <Pressable onPress={() => setCategorySelected(categorias)}>
      <View style={styles.container}>
        <Text style={styles.TextLista}>{categorias}</Text>
     </View>

    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        paddingVertical:30,
        backgroundColor:"#3D3522",
        paddingHorizontal:"20%"

    },

    TextLista:{
        color:"#AAC5BD",
        
      }
})