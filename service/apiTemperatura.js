import axios from "axios"; 

export const consultaTemperatura = async (cidade) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=5f312d66772174d25c59b6dff0715311`
    

    const res = await axios.get(url);

    const temperatura = {
        temperatura: parseInt(res.data.main.temp),
        tempMax: parseInt(res.data.main.temp_max),
        tempMin: parseInt(res.data.main.temp_min),
        descricao: res.data.weather[0].description,
        cidadePesquisada: res.data.name,
        icone: res.data.weather[0].icon,
        humidade: res.data.main.humidity,
        sensTermica: parseInt(res.data.main.feels_like),
        pais: res.data.sys.country,
    }

    return temperatura;
};