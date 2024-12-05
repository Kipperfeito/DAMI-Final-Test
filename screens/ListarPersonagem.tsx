import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { Personagem } from '../model/Personagem';
import { PersonagemService } from '../service/PersonagemService';
import styles from '../styles/personagem-estilo';


const ListarPersonagem = () => {

    const loadPersonagens = async () => {
        try {
            const resultado = await PersonagemService.findAll();
            console.log(resultado);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <View>
            <Button title="Carregar" onPress={loadPersonagens} />
        </View>
    )
}

export default ListarPersonagem;