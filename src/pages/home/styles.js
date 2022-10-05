import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    conteiner:{
        backgroundColor: '#04030b',
        width: '100%',
        height: '100%',
        padding: 20,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        color: '#fff',
        fontSize: 25
    },
    conteinerInput: {
        flexDirection: 'row',
        marginVertical: 30,
        marginHorizontal: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#3e424e',
        padding: 10,
        borderRadius: 20
    },
    input:{
        color: '#fff',
        width: '90%',
        paddingLeft: 5
    },
    conteinerCategoria: {
        paddingVertical: 15,        
    },
    categorias: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    conteinerImagem: {
        padding: 10,
        backgroundColor: '#3e424e',
        borderRadius: 15
    },
    emoji:{
        width: 35,
        height: 35
        
    },
    conteinerTitulo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 15
    },
    tituloSessao: {
        color: '#fff',
        fontSize: 18
    },
    verMais: {
        color: '#3e424e'
    }
})