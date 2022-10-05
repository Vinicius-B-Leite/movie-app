import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, Modal } from "react-native";
import ModalDetails from "../modal";
import styles from "./styles";

export default function Card(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <View style={styles.conteiner}>
            <Image source={{uri: props.dados.foto}} style={styles.cartaz}/>
            <TouchableOpacity style={styles.botaoVerMais} onPress={() => setModalIsOpen(!modalIsOpen)}>
                <Text style={styles.textoVerMais}>Ver mais</Text>
            </TouchableOpacity>
            <Modal transparent={true} animationType="slide" visible={modalIsOpen}>
                <ModalDetails dados={props.dados} setModalIsOpen={setModalIsOpen}/>
            </Modal>
        </View>
    )
}