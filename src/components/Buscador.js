import { View } from 'react-native'
import React, { useState } from 'react'
import { Pressable, TextInput, StyleSheet} from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
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
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        gap:10
    },
    TextInput:{
      backgroundColor: colors.color3,
      width:"65%",
      paddingHorizontal:10,
      paddingVertical:5,
      margin:10

    }
    
})