import JogoList from "../components/Jogolist/JogoList";
import api from "../services/api";
import axios from "axios";

const searchJogobyname = async (name) => {
    try {
        const response = await api.get('/jogos/');
        const JogoData = response.data.results;
        console.log('RETORNO DA API:', JogoData);
        
        /*const ListaJogos = await Promise.all(JogoData.map(async (jogo) => {
            const res = await axios.get(JogoList);
            return res.data;
            
        }));*/

        return ListaJogos;

    } catch(error){
        throw new Error('Error: ', error);
    }
}

export {
    searchJogobyname
}