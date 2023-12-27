import { NavigationContainer } from '@react-navigation/native';
import EnciclopediaStack from './EnciclopediaStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Enciclopedia" component={EnciclopediaStack} />
        <Tab.Screen name="Noticias" component={NoticiasStack} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}


export default Navigation

