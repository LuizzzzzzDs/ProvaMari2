import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';
import React, {useState} from 'react';




export default function Login() {
  return (
    <View style={styles.container}>
      <Text >Login
      </Text>
      
      <TextInput 

        placeHolder="Email: "
        onChangeText={newText => setText(newText)}
        defaultValue='Email: '

        style={{
          height:40,
          padding:5,
          marginHorizontal:8,
          borderWidth:2,
        }}
      />
      <TextInput

        placeHolder="Senha: "
        onChangeText={newText => setText(newText)}
        defaultValue='Senha: '

        style={{
          height:40,
          padding:5,
          marginHorizontal:8,
          borderWidth:2,
          color:"#050505ff",
          
        }}
      />
      
      <Button title='Enviar!'>
        
        
      </Button>

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
    fontSize:20
  },
});
