import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DinoItem = (item) => {
  return (
    <View style={styles.container}>
      <Text style={styles.TextDino}>{item.title}</Text>
      <Text style={styles.TextDino}>{item.epoca}</Text>
      <Text style={styles.TextDino}>{item.dieta}</Text>
      <Text style={styles.TextDino}>{item.longitud}</Text>
      <Text style={styles.TextDino}>{item.altura}</Text>
    </View>
  )
}

export default DinoItem

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        paddingVertical:30,
        backgroundColor:"#3D3522",
        paddingHorizontal:"20%"

    },

    TextDino:{
        color:"#AAC5BD",
        
      }

})