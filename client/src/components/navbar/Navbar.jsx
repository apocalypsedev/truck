import React from 'react'
import "./Navbar.css"
import { Eng, Rus, Uzb } from '../../assets/navbar/flag'

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src="" alt="Logo" />
            </div>

                <div className="nav__collection">
                    <ul className=' nav__menu'>
                        <li><a href="#" id="">Asosiy</a></li>
                        <li><a href="#" id="">Aloqa</a></li>
                        <li><a href="#" id="">Tavarlar</a></li>
                        <li><a href="#" id="">Premium</a></li>
                        <li><a href="#" id="">Sozlamalar</a></li>
                        <select className='select'>
                            <option value="">
                                <span><img src={Uzb} alt="Uzb" className='uzb' /></span>
                                <span>Uzbekcha</span> 
                            </option>
                            <option value="">
                                <span><img src={Eng} alt="Eng" className='eng' /></span>
                                <span>English</span>
                            </option>
                            <option value="">
                                <span><img src={Rus} alt="Rus" className='rus' /></span>
                                <span>Русский</span>
                            </option>
                        </select>
                        <button>Hozir bepul boshlang</button>
                    </ul>
                </div>
        </nav>
    )
}

export default Navbar