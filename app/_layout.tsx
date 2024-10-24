import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './(Home)';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AtomisticaScreen from './(Zatomistica)';

const Drawer = createDrawerNavigator();

export default function App() {  
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Atomistica" component={AtomisticaScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}