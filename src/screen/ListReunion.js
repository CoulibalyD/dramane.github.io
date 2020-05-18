import React from 'react';
import {  FlatList, StyleSheet, Text, View, Image,Dimensions,Button, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import {db} from './../confing';

export default class ListReunion extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      List_Reunion: [],
      desc: ''
    };
   // this._onUpdate = this._onUpdate.bind(this);
  }
  async componentDidMount(){
   await db.ref('Reunion/').on('value',(dataSnapshot)=>{
      var data =[]
      var id=0
      //console.log(dataSnapshot.key)
      dataSnapshot.forEach((child) =>{
        console.log(child.key)
        data.push({
          id:  child.key,
          heure: child.val().heure,
          lieu: child.val().lieu,
          sujet : child.val().sujet,
          //participant : child.val().participant
        })
      });
      this.setState({ List_Reunion: data });
     // console.log(this.state.List_Reunion)
    });
   // console.log(this.state.List_Reunion)
  }
  
  Item = ({heure, lieu,sujet,ids}) => (
    <View  style={styles.elt}>
      <View style={styles.elt1}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate("Ajout d'un Participant",{id: ids})}>
            <Text style={styles.item}>{heure} - {lieu} - {sujet}</Text>
        </TouchableHighlight>
      </View>
    </View>
     
  )
 
  render(){
    return (
      <View  style={styles.container}>
        <Text style={styles.info}> Appuez sur une liste de reunion pour afficher la liste des Participants</Text>

        <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.List_Reunion}
            renderItem={({item}) => 
            <View  style={styles.elt}>
              <View style={styles.elt1}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate("Liste des Participant",{id: item.id})}>
                    <Text style={styles.item}>HEURE: {item.heure} - LIEU: {item.lieu} - SUJET: {item.sujet}</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.elt1}>
                  <TouchableHighlight onPress={() =>  db.ref("Reunion/").child(item.id).remove()} >
                  <Icon 
                    raised
                    name='trash'
                    type='font-awesome'
                    color='red'
                  />          
                  </TouchableHighlight>
              </View>
            </View>
          }
        />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  info:{
    fontSize: 15,
    fontWeight: "bold"
 
  },

  container: {
    flex: 1,
   },
   item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  Icon :{

  }, 

  elt:{
    flexDirection: "row",
    alignContent: "space-between",
    alignItems:"stretch",
},

elt1:{
  flexDirection:"row",
  width: 315
},
item: {
  backgroundColor: '#f9c2ff',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
},
});
