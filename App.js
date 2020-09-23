/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base'



function App(){
const[country,setCountry]=useState("")
 
  function getCountryData(){
    //GET request 
    
    fetch(`https://restcountries.eu/rest/v2/name/${country}`, {
        method: 'GET'
        //Request Type 
    })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
        //Success 
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
    })
    //If response is not in json then in error
    .catch((error) => {
        //Error 
        alert(JSON.stringify(error));
        console.error(error);
    });
  }

  return(
    <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Country Name</Label>
              <Input onChangeText={val => setCountry(val)}/>
            </Item>
            <Button block style={{margin:15,padding:20}} onPress={()=>getCountryData()}>
            <Text>Enter</Text>
          </Button>
          </Form>
        </Content>
      </Container>
  )
}

export default App;
