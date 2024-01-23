import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ProfilePhoto from '../components/ProfilePhoto'

const MyProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image 
      source={require("../../assets/Fonts/usuario.avif")}
      style={styles.imagen}
      resizeMode='cover'
      />
      <ProfilePhoto title={"Agregar Foto"} onPress={()=> navigation.navigate("ImagenSelector")} />
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    imagen:{
        width:200,
        height:200
    }
})