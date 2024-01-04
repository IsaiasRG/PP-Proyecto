import { Pressable, TextInput, StyleSheet, View} from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react'
import { colors } from '../Global/colors';

const Buscador = ({setKeyword}) => {

  const [input, setInput] = useState("")

  return (
    <View style={styles.container}>
      <TextInput style={styles.TextInput} placeholder='Buscar' value={input} onChangeText={(t) => setInput(t)}/>

       <Pressable onPress={()=> setKeyword(input)}>
        <FontAwesome name="search" size={24} color="black" />
        </Pressable>

        <Pressable onPress={()=> setInput("")}>
        <AntDesign name="closecircle" size={24} color="black" />
        </Pressable>
    </View>
  )
}

export default Buscador

const styles = StyleSheet.create({

    container:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        gap:10,
        backgroundColor:colors.color1
    },
    TextInput:{
      backgroundColor: colors.color2,
      color:colors.color1,
      border:1,
      width:"65%",
      paddingHorizontal:10,
      paddingVertical:5,
      margin:5

    }
    
})