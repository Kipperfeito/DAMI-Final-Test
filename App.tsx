import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { Personagem } from './model/Personagem';
import { Database } from './database/Database';
import ManterPersonagem from './screens/ManterPersonagem.tsx'
import ListarPersonagem from './screens/ListarPersonagem.tsx'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function ManterScreen(): JSX.Element {
  return (
    <ManterPersonagem />
  );
}
function ListarScreen ({}) {
  return(
    <ListarPersonagem></ListarPersonagem>
  )
}


export default function App() {
  
  useEffect(() => {
    //Database.ReinitDb().then(() => console.log('Banco Reiniciado'));
    Database.initDb().then(() => 
      console.log('Banco Iniciado!')
    )
  }, []);
  
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Manter Personagem">
        <Drawer.Screen name="Manter Personagem" component={ManterScreen} />
        <Drawer.Screen name="Listar" component={ListarScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
