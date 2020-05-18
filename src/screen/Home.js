import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
export default function Home({navigation }) {
  return (
    
    <View style={styles.container}>
     
      <Text style = {styles.titre}>Bienvenue</Text>
      <Button 
        title="Ajout d'une Reunion"
        onPress={() => navigation.navigate("Ajout d'une Reunion")}
        style={styles.Button}
        />
        <Button 
        title="Liste Reunion"
        onPress={() => navigation.navigate("Liste de Reunion")}
        />
    </View>
   
  );
}
const styles = StyleSheet.create({
  Button:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
   titre:{
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle:"italic"
 } 
});
