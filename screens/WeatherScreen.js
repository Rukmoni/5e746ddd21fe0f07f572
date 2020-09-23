import React from 'react'
import {
  View,
 FlatList,
 TouchableOpacity
    
  } from 'react-native';
  import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';


function WeatherScreen({route,navigation}){
    const { weather } = route.params;
  console.log("weather",weather.current.temperature)
 

    return(
        
    <View>
        <Text>Temperature: {weather.current.temperature}</Text>
        <Text>WindSpeed: {weather.current.wind_speed}</Text>
        <Text>Precip: {weather.current.precip}</Text>
    </View>
    
    )

}
export default WeatherScreen;