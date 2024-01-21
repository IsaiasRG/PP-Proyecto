import { StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch} from 'react-native'
import { sumar, restar } from '../features/count/countSlice'

const Count = () => {

    const count2 = useSelector((state) => state.couter.value)
    const dispatch = useDispatch()

    
  return (
    <View style={styles.conteinerCount}>
    <Button title='sumar' onPress={() => dispatch(sumar())}></Button>
         <Text>{count2}</Text>
    <Button title='restar' onPress={()=> dispatch(restar())}></Button>
     </View>
  )
}

export default Count

const styles = StyleSheet.create({})