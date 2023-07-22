import React, { useState } from 'react';
import '../App.jsx'
import darkModeImage from '../assets/dark-mode.png';
import lightMode from '../assets/light-mode.png'
import lowArrow from '../assets/low-arrow.png'
import menuMobile from '../assets/menu-mobile.png'

    function Header() {
        const [viewMenu, setViewMenu] = useState(false);
        const [darkMode, setDarkMode] = useState(true);

        return (
            <header id="home">
                <div className="mobile">
                    <div className="menu">
                        <img onClick={()=> setDarkMode(!darkMode)} src={darkMode ? darkModeImage : lightMode} alt="dark-mode-icon"/>
                        <nav>
                            <a className="btn" href="#home">home</a>
                            <a className="btn" href="#projects">projects</a>
                            <a className="btn" href="#skills">skills</a>
                            <a className="btn" href="#contact">contact</a>
                            <a className="btn" >curriculum</a>
                        </nav> 
                        <img className='menu-mobile' onClick={()=> setViewMenu(!viewMenu)} src={menuMobile} alt='menu-mobile-icon'/>
                    </div>

                    {viewMenu ?
                        <nav className='navegation-mobile'>
                            <a className="btn" href="#home">home</a>
                            <a className="btn" href="#projects">projects</a>
                            <a className="btn" href="#skills">skills</a>
                            <a className="btn" href="#contact">contact</a>
                            <a className="btn" >curriculum</a>
                        </nav> 
                    :
                        null
                    }

                </div>
                <div class="info">
                    <h1>Matias Ortiz</h1>
                    <p>Soy un desarrollador de aplicaciones moviles nativas con <span>React Native</span>, actualmente
                    estoy cursando la carrera de Lincencatura en Sistemas en la Universidad General Sarmiento.</p>
                    <hr/>
                    <div class="redes">
                        <a href="https://github.com/matiasortizf" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/matiasortizf/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        {/* <a href="https://www.instagram.com/matias_o30/" target="_blank"><i class="fab fa-instagram"></i></a> */}
                    </div>
                </div>

                <div class="low-arrow">
                    <a href="#projects"><img className="low-arrow" src={lowArrow} alt="low-arrow-icon"/></a>
                </div>


            </header>

        )
    }

export default Header
