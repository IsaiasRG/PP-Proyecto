import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const CategoryItem = ({categorias, navigation, routes}) => {
  return (
    <Pressable onPress={() => navigation.navigate("Categorias", {categorias})}>
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
        backgroundColor:colors.color3,
        paddingHorizontal:"20%"

    },

    TextLista:{
        color:colors.letra2,
        
      }
})