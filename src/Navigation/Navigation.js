import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { colors } from '../Global/colors';
import MenuStack from './MenuStack';
import NoticiasStack from './NoticiasStack';
import TabIcon from '../components/TabIcon';


const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle: styles.TabBar
      }
      }
      >
        <Tab.Screen 
        name="Planeta Paleontologico"
         component={MenuStack}
         options={{
          tabBarIcon: () => <TabIcon icon="home" text="Inicio" />

         }}
         />
        <Tab.Screen
         name="Noticias"
          component={NoticiasStack}
          options={{
            tabBarIcon: () => <TabIcon icon="newspaper-outline" text="Noticias" />
          }} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}


export default Navigation

const styles = StyleSheet.create({
  TabBar: {
    height:70,
    backgroundColor: colors.color1
  }
})