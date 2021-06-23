import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { consultaTemperatura } from '../service/apiTemperatura';
import { LinearGradient } from 'expo-linear-gradient';

const Home = ({ navigation }) => {

    const [cidade, setCidade] = React.useState('');

    const buscarTemperatura = async () => {
        const temperatura = await consultaTemperatura(cidade)
        navigation.navigate('Page2', temperatura);
    }

    return (
        <LinearGradient
        colors={['#ddecff', '#14355e']}
        style={{width:'100%', height:'100%'}}
        >   
        <View style={styles.container}>
            <Text style={styles.title}>MODERN WEATHER</Text>
            <TextInput style={styles.input} 
                onChangeText={(texto) => setCidade(texto)}
                placeholder='Insira a cidade desejada'
            />
            <TouchableOpacity style={styles.button} onPress={() => { buscarTemperatura() }}>
                <Text style={styles.textButton}>Acessar</Text>
            </TouchableOpacity>
        </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#3d6aa2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff',
        padding: 80,
    },
    button: {
        borderRadius: 10,
        padding: 5,
        height: 50,
        width: '80%',
        marginTop: 10,
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#fff',
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
    },
    input: {
        height: 50,
        width: '80%',
        margin: 12,
        backgroundColor: '#d9d9d9',
        paddingLeft: 10,
        borderRadius: 10,
        fontSize: 20,
    }
});

export default Home


