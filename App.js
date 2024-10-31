import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const API_KEY = '1CD66749';

export default function App() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async () => {
        try {
            const result  = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);

            const data = await result.json();
            setMovies(data.Search)

        } catch(error) {
            throw error;
        }
    }

    return (
        <View style={styles.container}>
            <Text>Buscar de Filmes!</Text>
            <StatusBar style="auto" />
            <TextInput 
                placeholder='Digite aqui para pesquisar...'
                value={query}
                onChangeText={setQuery}
            />
            <Button 
                title='Buscar Filmes'
                onPress={searchMovies}
            />
            <FlatList 
                data={movies}
                keyExtractor={(item) => item.imdbID}
                renderItem={({ item }) => <Text>{ item.Title }</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 300
    }
});
