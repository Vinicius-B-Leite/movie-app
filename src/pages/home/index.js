import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StatusBar, TextInput, Image, FlatList, Modal } from "react-native";
import { api } from "../../services/api";
import { AntDesign } from '@expo/vector-icons';
import comedyEmoji from '../../assets/comedyEmoji.png'
import dramaEmoji from '../../assets/dramaEmoji.png'
import horrorEmoji from '../../assets/horrorEmoji.png'
import romanceEmoji from '../../assets/romanceEmoji.png'
import styles from "./styles";
import Card from "./card";

export default function Home() {

    const [films, setFilmes] = useState([])
    const [searchFilm, setSearchFilm] = useState('')


    useEffect(() => {

        async function getFilms() {
            const res = await api.get('r-api/?api=filmes')
            setFilmes(res.data)
        }
        getFilms()
    }, [])
    return (
        <View style={styles.conteiner}>
            <StatusBar />
            <View style={styles.header}>
                <Text style={styles.logo}>BL Films</Text>
                <AntDesign name="user" size={24} color="#fff" />
            </View>
            <View style={styles.conteinerInput}>
                <AntDesign name="search1" size={20} color="#fff" />
                <TextInput style={styles.input} value={searchFilm} onChangeText={(txt) => setSearchFilm(txt)} placeholder="Procurar filme" placeholderTextColor="#3e424e" />
            </View>
            <View style={styles.conteinerCategoria}>
                <View style={styles.conteinerTitulo}>
                    <Text style={styles.tituloSessao}>Categorias</Text>
                    <Text style={styles.verMais}>Ver mais</Text>
                </View>
                <View style={styles.categorias}>
                    <View style={styles.conteinerImagem}>
                        <Image style={styles.emoji} source={comedyEmoji} />
                    </View>
                    <View style={styles.conteinerImagem}>
                        <Image style={styles.emoji} source={romanceEmoji} />
                    </View>
                    <View style={styles.conteinerImagem}>
                        <Image style={styles.emoji} source={dramaEmoji} />
                    </View>
                    <View style={styles.conteinerImagem}>
                        <Image style={styles.emoji} source={horrorEmoji} />
                    </View>
                </View>
            </View>
            <View>
                <View style={styles.conteinerTitulo}>
                    <Text style={styles.tituloSessao}>Popular</Text>
                    <Text style={styles.verMais}>Ver mais</Text>
                </View>
                <FlatList
                    data={films}
                    key={(item) => String(item.id)}
                    renderItem={({ item }) => <Card dados={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            
        </View>
    )
}