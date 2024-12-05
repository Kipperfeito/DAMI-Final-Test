import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 20,
    },
    personagemItem: {
        flexDirection: 'column',
        opacity: 0.92,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 16,
        backgroundColor: '#eb4034',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 13,
        maxWidth: '90%',
    },
    personagemNome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    personagemClasse: {
        fontSize: 14,
        color: '#222',
        marginTop: 5,
    },
    botao: {
        backgroundColor: '#444',
        opacity: 0.91,
        width: '100%', 
        paddingVertical: 12, 
        paddingHorizontal: 20, 
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
        elevation: 5, 
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
    botaoText: {
        color: "white",
        fontSize: 15,
        fontWeight: 500
    },
    botaoDel: {
        background: 'transparent',
        width: '100%',
        borderRadius: 10,  
        paddingVertical: 12, 
        paddingHorizontal: 20, 
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20, 
        elevation: 2.1
      },
      botaoDelText: {
        color: "white",
        fontSize: 15,
        fontWeight: 500,
      },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
});

export default styles;
