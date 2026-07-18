import './weather.css'
import clouds from '../../assets/images/clouds.png'
import clear from '../../assets/images/clear.png'
import drizzle from '../../assets/images/drizzle.png'
import humidity from '../../assets/images/humidity.png'
import mist from '../../assets/images/mist.png'
import rain from '../../assets/images/rain.png'
import search from '../../assets/images/search.png'
import snow from '../../assets/images/snow.png'
import wind from '../../assets/images/wind.png'
import {useState, useEffect} from 'react'


function Weather(){
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

    const weatherImages={
        Clouds: clouds,
        Clear: clear,
        Drizzle: drizzle,
        Mist: mist,
        Rain: rain,
        Snow: snow,
        Wind: wind,
        Humidity: humidity,
    }

    const [city, setCity] = useState("")
    const [weather, setWeather] = useState(null);
    
    useEffect(()=>{
        document.title = "Weather App";
    }, []);

    const getWeather = async() => {
        const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`);

        const geoData= await geoResponse.json();

        const latitude = geoData[0].lat;
        const longitude = geoData[0].lon;

        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);

        const weatherData= await weatherResponse.json();

        setWeather(weatherData)

        
    }

    const condition = weather?.weather[0].main;
    
    return(
        <>
           <div className="ctn">
            <div className="input">
                <input 
                    value={city} 
                    className="weather-input" 
                    type="text" 
                    placeholder="Enter a city name"
                    onChange={(e)=> setCity(e.target.value)}
                />
                <button 
                className="weather-btn" 
                id="weather-btn" 
                onClick={getWeather}>
                    Get Weather
                </button></div>

                <h2 className='city-name'>{city}</h2>
                <p className='condition'>{condition}</p>

                <img 
                    src={weatherImages[condition]}  
                    className="weather-icon">
                </img>

                <p className='temperature'>{weather && `${(weather.main.temp-273.15).toFixed(1)}°C`}</p>

                

                
            </div> 
        </>
    );
}
export default Weather