import { StyleSheet, Text, View,Pressable } from 'react-native'
import { colors } from '../Global/colors'


const ProfilePhoto = ({title,onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}


export default ProfilePhoto


const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.color2,
        width:"70%",
        paddingVertical:8,
        margin:10
    },
    text:{
        color:colors.letra1,
        textAlign:"center",
        fontSize:18
    }
})