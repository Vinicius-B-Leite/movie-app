import { StyleSheet } from "react-native";

export default StyleSheet.create({
    conteiner: {
        width: 200,
        height: 250,
        margin: 10,
        position: 'relative',
        
    },
    botaoVerMais: {
        zIndex: 1,
        position: 'absolute',
        backgroundColor: '#2f3fbb',
        right: 0,
        bottom: 0,
        padding: 5,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20
    },
    textoVerMais: {
        fontSize: 15,
        color: '#fff'
    },
    cartaz: {
        width: '100%', 
        height: '100%', 
        zIndex: -1, 
        borderRadius: 20,
    }
})