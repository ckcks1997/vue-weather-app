import {createStore} from "vuex";

const API_KEY = import.meta.env.VITE_API_KEY;

//store 만들기
export default createStore({
    state:{
        //값 저장
        count:0,
        weatherData:{
            icon: 'icon',
            temp: 0,
            text: 'text',
            location: 'location',
            city: 'seoul',
        }
    },
    mutations:{
        //데이터 변경
        addCount(state, payload){
            state.count += payload;
        },
        updateWeather(state, payload){
            state.weatherData = payload;
            state.weatherData.icon = payload.weather[0].icon;
            state.weatherData.temp = payload.main.temp;
            state.weatherData.text = payload.weather[0].description;
            state.weatherData.location = payload.sys.country;
            state.weatherData.city = payload.name;
        },
        onSearchCity(state, payload){
            state.weatherData.city = payload;
        }
    },
    actions:{
        //비동기 작업
        getWeather(context) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                context.commit('updateWeather',data)
            })
            .catch(err =>{
                alert("에러가 발생했습니다.")
            })
        }
    }
})