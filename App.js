import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const App = () => {

  const {newItem, setNewItem} = useState("")
  const {list, setList} = useState([])

  const handleAddItem = () => {
    setList (current => [...current,{nombre:newItem}])
    setNewItem("")
    console.log(list)
  }

  return <View style={styles.container}>


      <View style={styles.InputContainer}>
       <TextInput style={styles.Input}
       placeholder='Nombre de la criatura'
       onChangeText={(t)=> setNewItem(t)}
       />
      
       <Button title="   +   " onPress={handleAddItem}/>
      </View>


      <View style={styles.contenedorLista}>
          <View style={styles.itemLista}>
            <Text style={styles.TextLista}>Therizinosaurus</Text>
            <Text style={styles.TextLista}>Hervivoro</Text>
            <Button title='   -   '/>
          </View>

          <View style={styles.itemLista}>
            <Text style={styles.TextLista}>Dilophosaurus</Text>
            <Text style={styles.TextLista}>Carnivoro</Text>
            <Button title='   -   '/>
          </View>

          <View style={styles.itemLista}>
            <Text style={styles.TextLista}>Tyrannosaurus</Text>
            <Text style={styles.TextLista}>Carnivoro</Text>
            <Button title='   -   '/>
          </View>

          
      </View>
      <Text style={styles.Text}>Proyecto Planeta Paleontologico - By Isaias Ramirez</Text>
      <StatusBar style="auto" />
    </View>
  ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    backgroundColor: '#386150',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  InputContainer:{
    marginTop:130, 
    flexDirection:"row",
    width:"80%",
    justifyContent:"space-around",
  },
  Input: {
    color:"#B1DAD1",
    backgroundColor:"#3D3522",
    borderWidth:1,
    borderColor:"#41533F",
    paddingHorizontal:10,
    paddingVertical:5,
    width:200

  },

  contenedorLista:{
    backgroundColor:"#58B09C",
    margin:20,
    padding:20,
  width:"80%",
  },

  itemLista:{
    margin:5,
    justifyContent:"space-around",
    flexDirection:"row",
    alignItems:"center",
    borderWidth:1,
    paddingHorizontal:10,
    paddingVertical:2,
    width:300
  },

  Text:{
    marginTop:20,
    color:"#B1DAD1",
    justifyContent:"flex-end",
  },
  TextLista:{
    marginTop:20,
    color:"#121711",
    justifyContent:"flex-end",
  }
});


export default App