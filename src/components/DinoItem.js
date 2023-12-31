import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const DinoItem = ({item, navigation, route}) => {
  return (
    <View>
      <Pressable style={styles.container} onPres={() => navigation.navigate("Elemento", {id:item.id})} >
      <Text style={styles.TextDino}>{item.title}</Text>
      <Text style={styles.TextDino}>{item.epoca}</Text>
      <Text style={styles.TextDino}>{item.dieta}</Text>
      <Text style={styles.TextDino}>{item.longitud}</Text>
      <Text style={styles.TextDino}>{item.altura}</Text>

      </Pressable>
    </View>
  )
}

export default DinoItem

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        paddingVertical:30,
        backgroundColor:colors.color3,
        paddingHorizontal:"20%"

    },

    TextDino:{
        color:colors.letra2,
        
      }

})
