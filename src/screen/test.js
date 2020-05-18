import React from 'react';
import {  FlatList, StyleSheet, Text, View, Image,Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const  img = [                                                                    
  {key: 'Alassane', uri: 'https://i.pravatar.cc/150?u=838403338'},
  {key: 'Cheick', uri: 'https://i.pravatar.cc/150?u=83843038'},
  {key: 'Lamine', uri: 'https://i.pravatar.cc/150?u=8384338'},
  {key: 'Souleymane', uri: 'https://i.pravatar.cc/150?u=84842338'},
  {key: 'Moussa', uri: 'https://i.pravatar.cc/150?u=838143338'},
]
export default function opp({navigation }) {
  Item = ({txt, uri}) => (
    <View  style={styles.elt}>
      <View style={styles.elt1}>
        <Image
            style={styles.tinyLogo}
            source={{ uri: uri,}}
        />
        <Text style={styles.item}>{txt}</Text>
      </View>
      <View style={styles.elt1}>
              <Icon 
                     raised
                     name='trash'
                     type='font-awesome'
                     color='pink'
              />          
      </View>
    </View>
     
  )
  return (
      <View style={styles.container}>
       <FlatList
          data={
            img
          }
          ItemSeparatorComponent = {() => <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#000",
            }}
          />}
          renderItem={({item}) => <Item uri={item.uri} txt = {item.key}/>}

        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
   },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  tinyLogo: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },

  elt:{
      flexDirection: "row",
      alignContent: "space-between",
      alignItems:"stretch",
  },

  elt1:{
    flexDirection:"row",
    width: 315
  }
});
