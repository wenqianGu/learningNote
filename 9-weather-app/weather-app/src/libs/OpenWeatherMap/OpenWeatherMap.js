import axios from "axios";
// 可复用的东西抽出来写一个方法；
// const get = ({
//                  path,
//                  params,
//              }) => axios.get((`https://api.openweathermap.org/data/2.5${path}`), {
//     params: {
//         units: 'metric',
//         appid: '2466213f21b4b723d341e00a430a7673',
//         ...params
//     }
// })

//
// const OpenWeatherMap = {
//     get,
// }

// 通读axios 可以创建一个instance
const OpenWeatherMap = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        units: 'metric',
        appid: '2466213f21b4b723d341e00a430a7673',
    }
})

export default OpenWeatherMap;