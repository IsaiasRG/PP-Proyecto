import { FlatList, View } from 'react-native';
import Buscador from '../components/Buscador';
import Header from '../components/Header';
import criaturas from "../Data/dinos.json"
import DinoItem from '../components/DinoItem';


const ItemListCategory = () => {
  return (

    <>
        <Header />
        <Buscador />
        <FlatList 
        data={criaturas}
        keyExtractor={item => item.id}
        renderItem={({item}) => <DinoItem item={item}/>}
        />
    </>
    
  )
}

export default ItemListCategory

const styles = StyleSheet.create({


    
})