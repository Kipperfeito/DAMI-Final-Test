import {StyleSheet} from "react-native"

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cabeca: {
      width: '100%',
      height: '30%',
    },
    titulo: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#333333',
      marginBottom: 10
    },
    input: {
      backgroundColor: '#d1d1d1',
      height: 40,
      width: "80%",
      borderRadius: 10,
      marginTop: 20,
      fontSize: 15
    },
    botao: {
      backgroundColor: "#eb4034",
      width: "50%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 20
    },
    botaoText: {
      color: "white",
      fontSize: 15,
      fontWeight: 500
    },
    botaoSec: {
      backgroundColor: "white",
      width: "50%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      borderColor: "#eba234",
      borderWidth: 2,
      marginTop: 20
    },
    botaoSecText: {
      color: "#eba234",
      fontSize: 15,
      fontWeight: 500
    }
})