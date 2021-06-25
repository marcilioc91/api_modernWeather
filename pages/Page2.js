import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Page2 = ({ navigation, route }) => {

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#ddecff', '#14355e']}
                start={[4.0,0.0]}
                style={styles.gradient}
            >
                <View style={styles.contTitle}>
                    <Text style={styles.title}>{(route.params.cidadePesquisada).toUpperCase()}</Text>
                </View>
                <Text style={styles.titleGr}>{route.params.temperatura}ºC</Text>
                <View style={styles.ContTemp}>
                    <Text style={styles.textosSub}>Máx.: {route.params.tempMax}ºC  </Text>
                    <Text style={styles.textosSub}>Mín.: {route.params.tempMin}ºC</Text>
                </View>
                <Image
                    style={styles.images}
                    source={{ uri: `https://openweathermap.org/img/wn/${route.params.icone}@2x.png` }}
                />
                <View style={styles.contText}>
                    <Text style={styles.textos}>País: {route.params.pais}</Text>
                    <Text style={styles.textos}>Sensação Térmica: {route.params.sensTermica}ºC</Text>
                    <Text style={styles.textos}>Descrição: {route.params.descricao}</Text>
                    <Text style={styles.textos}>Umidade: {route.params.humidade}%</Text>
                </View>
                <TouchableOpacity
                    onPress={() => { (navigation.goBack()) }}
                    style={styles.button}>
                    <Text style={styles.txtBotao}>Voltar</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3d6aa2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contTitle: {
        paddingTop: 15,
        alignItems: 'center',
        maxWidth: '80%',
    },
    contText: {
        alignItems: 'center',
        padding: 25,
    },
    ContTemp: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    images: {
        height: 120,
        width: 120,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    gradient: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: 70,
    },
    button: {
        borderRadius: 10,
        paddingTop: 10,
        height: 50,
        width: '80%',
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    textos: {
        fontSize: 22,
        fontWeight: 'normal',
        color: '#fff',
        margin: 7,
    },
    textosSub: {
        fontSize: 15,
        color: '#fff',
    },
    titleGr: {
        color: '#fff',
        fontSize: 55,
    },
    txtBotao: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#14355e',
    }
});

export default Page2


