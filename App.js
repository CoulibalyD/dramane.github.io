import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screen/Home';
import AddReunion from './src/screen/AddReunion';
import ListReunion from './src/screen/ListReunion';
import AddParticipant from './src/screen/AddParticipant';
import ListParticipant from './src/screen/ListParticipant';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Liste de Reunion" component={ListReunion} />
        <Stack.Screen name="Ajout d'une Reunion" component={AddReunion} />
        <Stack.Screen name="Ajout d'un Participant" component={AddParticipant} />
        <Stack.Screen name="Liste des Participant" component={ListParticipant} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
