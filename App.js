import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.InputContainer}>
       <TextInput style={styles.Input}/>
       <Button title="+"/>
      </View>
      <Text style={styles.Text}>Proyecto Planeta Paleontologico - By Isaias Ramirez</Text>
      <StatusBar style="auto" />
    </View>
  );
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
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-around",
    backgroundColor:"#3D3522"
  },
  Input: {
    borderWidth:1,
    borderColor:"#41533F",

  },

  Text:{
    color:"#B1DAD1"
  }
});
