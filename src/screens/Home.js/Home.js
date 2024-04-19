import { useState } from "react";
import { searchJogobyname } from "../../services/JogoService";
import { ActivityIndicator, Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import JogoList from "../../components/Jogolist/JogoList";

const Home = ({navigation}) => {
    const [ searchText, setSearchText ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ jogos, setJogos ] = useState([]);

    const handleSearchJogo = async () => {
        setLoading(true);
        try {
            const response = await searchJogobyname(searchText);
            setJogos(response);
        } catch (error){
            console.error('Error fetching Game: ', error);
            setJogos([]);
        }
        setLoading(false);
    }

    const handleJogoPress = (jogos) => {
        navigation.navigate('Detalhes dos Jogos', {jogos});
    }

    return(
        <View>
            <TextInput 
                style={styles.inputText}
                placeholder="Buscar por um Jogo"
                onChangeText={ (text) => setSearchText(text) }
                value={searchText}
            />
            <Button title="Buscar" onPress={handleSearchJogo} />
            { loading && <ActivityIndicator style={styles.spin} /> }
            <FlatList
                data={jogos}
                keyExtractor={ (item) => item.id.toString() }
                renderItem={ ({item}) => (<JogoList pokemon={item} onPress={ () => handleJogoPress(item)} />)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputText: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    spin: {
        marginTop: 20
    }
});

export default Home;