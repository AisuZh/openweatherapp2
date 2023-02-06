import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Home_info from '../components/Home_info'

const Home = ({city}) => {
  
  const [weather,setWeather] = useState({})

  useEffect(()=> {
    const getData = async () => {
        const { data } = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`)
        setWeather(data)
      }
      getData()

  },[city] )

  console.log(weather)
  

  

  return (
    <div>
 
        {
          <Home_info name = {weather.name} temp={Math.round((weather?.main?.temp -32)*5/9)} descr={weather?.main?.description} feels_like={weather?.main?.feels_like} humidity={weather?.main?.humidity} description={weather?.weather[0]?.description}  />
        }
        
    </div>
  )
}

export default Home