import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const JogoList = ({ jogo, onPress }) => {
    const { name : nome, 
        date: data ,  
        float: preco } = jogo;


    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text>{`Nome: ${nome}`}</Text>
                <Text>{`Data de lançamento: ${data}`}</Text>
                <Text>{`Preço: ${preco}`}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    }
});

export default JogoList;