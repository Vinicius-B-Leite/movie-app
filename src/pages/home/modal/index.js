import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function ModalDetails(props) {
    return (
        <View style={styles.conteiner}>
            <TouchableOpacity onPress={() => props.setModalIsOpen(false)}>
                <AntDesign style={styles.fechar} name="closecircleo" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.titulo}>{props.dados.nome}</Text>
            <Text style={styles.sinopse}>{props.dados.sinopse}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        width: '100%',
        height: '50%',
        backgroundColor: '#3e424e',
        position: 'absolute',
        bottom: 0,
        borderTopEndRadius: 40,
        borderTopLeftRadius: 40,
        padding: 20
    },
    fechar: {
        alignSelf: 'flex-end'
    },
    titulo: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 40
    },
    sinopse: {
        textAlign: 'justify',
        color: '#fff',
        fontSize: 15
    }
})