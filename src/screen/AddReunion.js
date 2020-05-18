
import React, { Component, useState } from 'react';
import { 
  StyleSheet, Text, 
  View, Image, TextInput, 
  Dimensions, TouchableOpacity, ToolbarAndroid, Button,DatePickerIOS} from 'react-native';
  import {db} from './../confing';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height



export default function AddReunion({ navigation }) {

  function send(heure,lieu,sujet){
    let id = Math.floor(Math.random()*1000)+1;
   db.ref('Reunion/'+id).set({
     heure: heure,
     lieu: lieu,
     sujet: sujet,
     
     participant:[
       {
        
       }
     ]
   })
   navigation.navigate("Liste de Reunion");
  }
  const [Heure, setHeure] = useState('');
  const [Lieu, setLieu] = useState('');
  const [SujetReu, setSujetReu] = useState('');
  const [chosenDate, setChosenDate] = useState(new Date());

  return (
   
    <View style={styles.container}>
         <View>
              <Text style = {styles.titre}>AJOUT</Text>

                <TextInput
                  placeholder="L'heure de la Reunion"
                  onChangeText={Heure => setHeure(Heure)}
                  defaultValue={Heure}
                  style={styles.simpleInput}
                  />

                <TextInput
                  placeholder='Lieu de la Reunion'
                  onChangeText={Lieu => setLieu(Lieu)}
                  defaultValue={Lieu}
                  style={styles.simpleInput}
                  />

                  <TextInput
                  placeholder='Le Sujet de La Reunion'
                  onChangeText={SujetReu => setSujetReu(SujetReu)}
                  defaultValue={SujetReu}
                  style={styles.simpleInput}
                  />
         </View>
         <View>
                    <DatePickerIOS
                    date={chosenDate}
                    onDateChange = {setChosenDate}
                  />
                  
                  <Button
                    title="Ajouter Une Reunion"
                    onPress={() =>send(Heure, Lieu, SujetReu)}
                  />
         </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
 titre:{
  backgroundColor: '#f9c2ff',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
  fontSize: 20,
  fontWeight: "bold",
  
  
 } 
});
