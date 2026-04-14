import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';
import React, {useState} from 'react';
import Login from './Login';
import Data from './Data';
import App from './App';


export default function Estoque() {
  return (
    <View
      style={[
        styles.container,
        {
          
          flexDirection: 'column',
        },
      ]}>
      
     <Data></Data>
     <Button title="+">

     </Button>

     <Button title='-'

     ></Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#088cf8ff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:50
  },
});
