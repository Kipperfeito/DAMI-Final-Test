import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { useState } from 'react';
import { Personagem } from '../model/Personagem';
import { PersonagemService } from '../service/PersonagemService';
import styles from '../styles/listar-estilo';


const ListarPersonagem = () => {
    const [personagens, setPersonagens] = useState([]);

    const loadPersonagens = async () => {
        try {
            const resultado = await PersonagemService.findAll();
            setPersonagens(resultado);
            console.log(resultado);
        } catch (error) {
            console.log(error);
        }

    };

    const deletar = async (item: Personagem) => {
        Alert.alert( "Confirmar exclusão\n",
            `Tem certeza que deseja excluir o personagem ${item.nome}?`,
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Confirmar",
                    onPress: async () => {
                        const resultado = await PersonagemService.delete(item.id);
                        console.log(resultado);
                        if(resultado > 0) {
                            loadPersonagens();
                            alert(`Personagem ${item.id} - ${item.nome} deletado!`);
                        } else {
                            alert(`Erro ao deletar o personagem ${item.id} - ${item.nome}`);
                        }
                    }
                }
            ],
            { cancelable: true }
        )
    }


    return (
        <View>
            <TouchableOpacity onPress={loadPersonagens} style={styles.botao}>
                <Text style={styles.botaoText}>Atualizar</Text>
            </TouchableOpacity>
             <FlatList
                data={personagens}
                keyExtractor={(item) => item.id.toString()} 
                renderItem={({ item }) => (
                    <View style={styles.personagemItem}>
                        <Text style={styles.personagemNome}>Personagem: {item.nome}</Text>  
                        <Text style={styles.personagemClasse}>Classe: {item.classe}</Text>
                        <TouchableOpacity onPress={() => deletar(item)} style={styles.botaoDel}>
                            <Text style={styles.botaoDelText}>Deletar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={<Text>Nenhum personagem encontrado.</Text>}  
            />
        </View>
    )
}

export default ListarPersonagem;