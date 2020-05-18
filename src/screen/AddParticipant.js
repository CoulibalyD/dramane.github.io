
import React, { Component, useState } from 'react';
import { 
  StyleSheet, Text, 
  View, Image, TextInput, 
  Dimensions, TouchableOpacity, ToolbarAndroid, Button} from 'react-native';
  import {db} from './../confing';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function AddParticipant({ navigation,route }) {
  const { id } = route.params;
  function send(email1,email2,email3){
    
    db.ref("Reunion/").child(id).update({
      participants:{
        email1: email1,
        email2: email2,
        email3: email3
      }
    })
    
 
    navigation.navigate("Liste des Participant");
   }
   const [Name, setName] = useState('');
   const [First, setFirst] = useState('');
   const [Adress, setAdress] = useState('');

  return (
   
    <View style={styles.container}>
     

      <TextInput
        placeholder="Adresse Mail 1"
        onChangeText={Name => setName(Name)}
        defaultValue={Name}
        style={styles.simpleInput}
        />

      <TextInput
        placeholder='Adresse Mail 2'
        onChangeText={First => setFirst(First)}
        defaultValue={First}
        style={styles.simpleInput}
        />

        <TextInput
        placeholder="Adresse Mail 2"
        onChangeText={Adress => setAdress(Adress)}
        defaultValue={Adress}
        style={styles.simpleInput}
        />
      

      <Button
        title="Ajouter Un Participant"
        onPress={() =>send(Name, First, Adress) }
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

  simpleInput: {
    width: width - 40,
    marginTop: 30,
    height: 40, 
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor:'blue'
  },

  textAreaInput: {
    width: width - 40,
    marginTop: 30,
    height: 100, 
    borderColor: '#FF80AB', 
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30
  },

  buttonText: {
    color: 'white'
  }
});
