import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const Buscador = () => {
  return (
    <View style={styles.container}>
       <Pressable>
        <TextInput>
        <FontAwesome name="search" size={24} color="black" />
        </TextInput>
        </Pressable>

        <Pressable>
        <TextInput>
        <AntDesign name="closecircle" size={24} color="black" />
        </TextInput>
        </Pressable>
    </View>
  )
}

export default Buscador

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})