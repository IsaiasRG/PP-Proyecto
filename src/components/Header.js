import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'


const Header = ({title="Planeta Paleontologico"}) => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.Text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader:{
        width:"100%",
        paddingTop:40,
        height:90,
        backgroundColor:colors.color1,
        justifyContent:"center",
        alignItems:"center"
    },
    Text:{
        color:colors.letra1,
        fontSize:20,
    }
})