import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'


const Header = ({setCity}) => {
    
    const handleChange = (e) => {
        setCity(e.target.value)
    }

    
    // const handleSend = (e) => {
    //   if(e.key === "Enter"){
    //       console.log(city)
    //   }
    // }
    return (
        <div className='header'>
            <div className='container'>
                <div className='header__wrapper'>
                    <div className='header__logo'>
                        <NavLink to="/">
                            The Weather Channel
                        </NavLink>
                    </div>
                    <div className='header__search'>
                        <input type="text" placeholder='Поск по городу или индексу' onChange={handleChange} />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Header