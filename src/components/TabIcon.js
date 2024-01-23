import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';

const TabIcon = ({icon, text}) => {
  return (
    <>
   
    <View>
      <AntDesign name={icon} size={30} color="white" />
      <Text>{text}</Text>
    </View>
    <View>
    <Ionicons name={icon} size={30} color="white" />
    <Text>{text}</Text>
    </View>
    </>
  )
}

export default TabIcon

const styles = StyleSheet.create({})