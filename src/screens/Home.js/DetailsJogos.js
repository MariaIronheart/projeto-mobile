import { StyleSheet, Text, View } from "react-native";

const JogosDetailsScreen = ({ route }) => {
    const { jogo } = route.params;

    return(
        <View style={styles.container}>
            <Text>{`Nome: ${jogo.name}`}</Text>
            <Text>{`Data de lançamento: ${jogo.data}`}</Text>
            <Text>{`Preço: ${jogo.preco}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default JogosDetailsScreen;