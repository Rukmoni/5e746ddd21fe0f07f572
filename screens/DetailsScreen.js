import React from 'react'
import {
  View,
 FlatList
    
  } from 'react-native';
  import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';


function DetailsScreen({route,navigation}){
    const { countryList } = route.params;
  console.log("capital",countryList)
  const renderItem = ({ item }) => {
    if (item.capital) {
      return (
         <Text>{item.capital}</Text> 
      )}
  }

    return(
        
        
        <FlatList
        data={countryList}
        renderItem={renderItem}
        keyExtractor={item => item.name}
       
      />
    
    )

}
export default DetailsScreen;