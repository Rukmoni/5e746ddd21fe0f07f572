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

  
  function InputScreen({navigation}){
    const[country,setCountry]=useState("")
 
    async function getCountryData(){
        //GET request 
        
        await fetch(`https://restcountries.eu/rest/v2/name/${country}`, {
            method: 'GET'
            //Request Type 
        })
        .then((response) => response.json())
        //If response is in json then in success
        .then((responseJson) => {
            //Success 
            alert(JSON.stringify(responseJson[0].capital));
            navigation.navigate('Details',{
              countryList: responseJson
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
    
      return(
    
    
      <Form>
        <Item floatingLabel>
          <Label>Country Name</Label>
          <Input onChangeText={val => setCountry(val)}/>
        </Item>
        <Button block style={{margin:15,padding:20}} onPress={()=>getCountryData()}>
        <Text>Enter</Text>
      </Button>
      </Form>


      )

  }
  export default InputScreen