import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const API_KEY = '1CD66749';

export default function App() {

  const searchMovies = async () => {
      try {
          const result  = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=spider`);

          const data = await result.json();
          console.log(data);

      } catch(error) {
          throw error;
      }
  }

  return (
    <View style={styles.container}>
        <Text>Hello world!</Text>
        <StatusBar style="auto" />
        <Button 
            title='Buscar Filmes'
            onPress={searchMovies}
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
  },
});
