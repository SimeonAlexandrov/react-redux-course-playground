import axios from 'axios'

const API_KEY = '9298db59804189150066a43d56c2ca05'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    
    const url = `${ROOT_URL}&q=${city},bg`
    const request = axios.get(url)

    console.log(request)
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}