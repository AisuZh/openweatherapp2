import React from 'react'

const Home_info = ({name, temp, description, feels_like, humidity}) => {
  return (
    <div className='home'>
    <div className='container'>
        <div className='top'>
            <div className='location'>
                <p>{name}</p>
            </div>
            <div className='temp'>
                <h1>{temp}°C</h1>
            </div>
            <div className='descr'>
                <p>{description}</p>
            </div>
        </div>
        <div className='bottom'>
            <div className='feels'>
                <p>Feels like</p>
                <p>{feels_like}</p>
            </div>
            <div className='humidity'>
                <p>Humidity</p>
                <p>{humidity}%</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Home_info