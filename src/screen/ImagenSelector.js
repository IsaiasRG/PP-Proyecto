import { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import ProfilePhoto from '../components/ProfilePhoto'
import * as ImagePicker from 'expo-image-picker';


const ImagenSelector = () => {

    const [image, setImage] = useState("")
    const pickImage = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        
        if(granted){
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1,
                base64: true
              });
          
              if (!result.canceled) {
                setImage('data:image/jpeg;base64,' + result.assets[0].base64);
              }
            };
        }
    }
    const confirmImage = () => {}

  return (
    <View style={styles.container}>
        
        <Image 
          source={image ? {uri: image} : require("../../assets/Fonts/usuario.avif")}
          style={styles.imagen}
          resizeMode='cover'
        />

        <ProfilePhoto title={"Tomar una nueva foto"} onPress={pickImage}/>
        <ProfilePhoto title={"Elejir Imagen"} onPress={confirmImage}/>

    </View>
  )
}

export default ImagenSelector

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    image:{
        width:200,
        height:200
    },
    text:{


    }
})