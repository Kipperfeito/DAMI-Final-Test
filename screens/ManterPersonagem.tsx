import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { useState } from 'react';
import { Personagem } from '../model/Personagem';
import { PersonagemService } from '../service/PersonagemService';
import styles from '../styles/personagem-estilo.js';

const ManterPersonagem = () => {
    const [formPersonagem, setFormPersonagem] = useState<Partial<Personagem>>({});

    const Limpar = () => {
        setFormPersonagem({});
    }

    const Salvar = async () => {
        try {
            const personagem = new Personagem(formPersonagem);
            console.log('Tentando salvar o personagem:', personagem);
            
            const resultado = await PersonagemService.create(personagem);
            console.log('Resultado da inserção:', resultado);
            
            alert('Personagem ' + personagem.id + ' - ' + personagem.nome + ' adicionado!');
            Limpar();
        } catch (err) {
            console.error('Erro ao salvar personagem:', err);
            alert('Erro ao salvar o personagem.');
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/DungeonBlitzLogo.png')}
                style={styles.cabeca}
                resizeMode="contain"
            />
            <Text style={styles.titulo}>CADASTRO DE PERSONAGENS</Text>

            <TextInput
                style={styles.input}
                placeholder='Digite o ID'
                value={formPersonagem.id?.toString()}
                onChangeText={
                    (valor) => setFormPersonagem({...
                        formPersonagem, id: parseInt(valor) || undefined 
                    })
                }
            />

            <TextInput
                style={styles.input}
                placeholder='Digite o nome'
                value={formPersonagem.nome}
                onChangeText={
                    (valor) => setFormPersonagem({...
                        formPersonagem, nome: valor 
                    })
                }
            />

            <TextInput
                style={styles.input}
                placeholder='Digite a idade'
                value={formPersonagem.idade?.toString()}
                onChangeText={
                    (valor) => setFormPersonagem({...
                        formPersonagem, idade: parseInt(valor) 
                    })
                }
            />

            <TextInput
                style={styles.input}
                placeholder='Digite a classe'
                value={formPersonagem.classe}
                onChangeText={
                    (valor) => setFormPersonagem({...
                        formPersonagem, classe: valor 
                    })
                }
                />
            <TextInput
                style={styles.input}
                placeholder='Digite a descrição'
                value={formPersonagem.descricao}
                onChangeText={
                    (valor) => setFormPersonagem({...
                        formPersonagem, descricao: valor 
                    })
                }
            />
            <TouchableOpacity onPress={Limpar} style={styles.botaoSec}>
                <Text style={styles.botaoSecText}>Limpar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Salvar} style={styles.botao}>
                <Text style={styles.botaoText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ManterPersonagem;