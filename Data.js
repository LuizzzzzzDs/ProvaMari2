import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import App from './App';
import Estoque from './Estoque';
import Login from './Login';
import { Image } from 'react-native-web';



const styles = StyleSheet.create({
  container1: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default function Data() {

const FlatListBasics = () => {
  return (
    <View style={styles.container1}>
        <Text></Text>
      <FlatListBasics
        produto1={[
          {id: '1'},
          {imagem: "assets/1.webp"},
          {Nome: "Maçã"},
          {Preco: "R$3,99"}
        
        ]
    }
    produto2={[
        {id: '2'},
        {Imagem: ""},
        {Nome: "Banana"},
        {Preco: "R$4,99"}
    ]}
     produto3={[
        {id: '3'},
        {Imagem: ""},
        {Nome: "Manga"},
        {Preco: "R$5,99"}
    ]}
     produto4={[
        {id: '4'},
        {Imagem: ""},
        {Nome: "Laranja"},
        {Preco: "R$4,99"}
    ]}
     produto5={[
        {id: '5'},
        {Imagem: ""},
        {Nome: "Chocolate"},
        {Preco: "R$11,99"}
    ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>

  );
};


}