import React from 'react';
import { StyleSheet, Text, View, Button,FlatList, } from 'react-native';
import {db} from './../confing';

export default class ListParticipant extends React.Component {
 
  constructor(props){
    super(props);
    this.state ={
      List_Participant: [],
      desc: ''
    };
   // this._onUpdate = this._onUpdate.bind(this);
  }
  async componentDidMount(){
    let id = this.props.route.params.id;
   // console.log(i)
   await db.ref('Reunion/'+id).on('value',(dataSnapshot)=>{
      var data =[]
      //console.log(dataSnapshot)
      data.push({
        id:  dataSnapshot.key,
        email1: dataSnapshot.val().participants.email1,
        email2: dataSnapshot.val().participants.email2,
        email3 : dataSnapshot.val().participants.email3,
      })
      this.setState({ List_Participant: data });
    });
    
  }
 
  render(){
    const ids = this.props.route.params.id
    return (
      <View  style={styles.container}>
          <Text style={styles.info}>Liste Participant</Text>
        <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.List_Participant}
            renderItem={({item}) =>  <Text style={styles.item}>{item.email1} {"\n"} {"\n"} {item.email2} {"\n"} {"\n"} {item.email3} </Text>}
        />
         <Button 
        title="Ajouter des Partipants"
        onPress={() => this.props.navigation.navigate("Ajout d'un Participant",{id: this.props.route.params.id })}
        />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   },
   item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,},

    info:{
      fontSize: 15,
      fontWeight: "bold"
   
    },
  })