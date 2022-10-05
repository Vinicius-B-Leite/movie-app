import React, { useEffect, useState, useRef } from "react";
import { View, Text, SafeAreaView, StatusBar, TextInput, Image, FlatList, Modal, ToastAndroid } from "react-native";
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
    const [searchFilmInput, setSearchFilmInput] = useState('')
    const flatlisRef = useRef()


    useEffect(() => {

        async function getFilms() {
            const res = await api.get('r-api/?api=filmes')
            setFilmes(res.data)
        }
        getFilms()
    }, [])
    const searchFilm = () => {
        let filmePesquisado = films.filter(f => f['nome'].includes(searchFilmInput))
        if (filmePesquisado.length === 0){
            ToastAndroid.show('Filme não encontrado', ToastAndroid.SHORT)
            return
        }
        flatlisRef.current.scrollToItem({animated: true, item: filmePesquisado[0]})
    }
    return (
        <View style={styles.conteiner}>
            <StatusBar />
            <View style={styles.header}>
                <Text style={styles.logo}>BL Films</Text>
                <AntDesign name="user" size={24} color="#fff" />
            </View>
            <View style={styles.conteinerInput}>
                <AntDesign name="search1" size={20} color="#fff" />
                <TextInput 
                    style={styles.input} 
                    value={searchFilmInput} 
                    onChangeText={(txt) => setSearchFilmInput(txt)} 
                    placeholder="Procurar filme" 
                    placeholderTextColor="#3e424e"
                    onEndEditing={searchFilm}
                    />
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
                    ref={flatlisRef}
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