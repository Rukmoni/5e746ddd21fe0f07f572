import React from 'react'
import {
  View,
 FlatList,
 TouchableOpacity,
 Image
    
  } from 'react-native';
  import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';


function DetailsScreen({route,navigation}){
    const { countryList } = route.params;
  console.log("capital",countryList)
  async function  getWeatherData(capital){
       
    await fetch(`http://api.weatherstack.com/current?access_key=4869357e28189fd3d9afca5036415e02&query=${capital}`, {
        method: 'GET'
        //Request Type 
    })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
        //Success 
        //alert(JSON.stringify(responseJson));
        console.log(responseJson)
        navigation.navigate('Weather',{
            weather: responseJson
          });
       
       // console.log(responseJson);
    })
    //If response is not in json then in error
    .catch((error) => {
        //Error 
        alert(JSON.stringify(error));
        console.error(error);
    });

  }
  const renderItem = ({ item }) => {
    if (item.capital) {
      return (
          <TouchableOpacity onPress={()=>getWeatherData(item.capital)}>
          <Image
        style={{width:40,height:40}}
        source={{uri:'https://restcountries.eu/data/vir.svg'}}
      />
         <Text>{item.capital}</Text> 
         <Text>{item.population}</Text>
         <Text>{item.latlng}</Text>
         </TouchableOpacity>
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