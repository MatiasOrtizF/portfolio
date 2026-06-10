import React, { useState } from 'react';
import '../App.jsx'
import lowArrow from '../assets/low-arrow.png'
import menuMobile from '../assets/menu-mobile.png'

function Header() {
    const [viewMenu, setViewMenu] = useState(false);

    return (
        <header id="home">
            <div className="mobile">
                <div>
                    <nav>
                        <a className="btn" href="#home">home</a>
                        <a className="btn" href="#projects">projects</a>
                        <a className="btn" href="#skills">skills</a>
                        <a className="btn" href="#contact">contact</a>
                        <a className="btn" href="CV Ortiz Matias 2026.pdf" target="_blank">curriculum</a>
                    </nav>
                    <img className='menu-mobile' onClick={() => setViewMenu(!viewMenu)} src={menuMobile} alt='menu-mobile-icon' />
                </div>

                {viewMenu ?
                    <nav className='navegation-mobile'>
                        <a className="btn" href="#home">home</a>
                        <a className="btn" href="#projects">projects</a>
                        <a className="btn" href="#skills">skills</a>
                        <a className="btn" href="#contact">contact</a>
                        <a className="btn" href="CV Ortiz Matias 2026.pdf" target="_blank">curriculum</a>
                    </nav>
                    :
                    null
                }

            </div>
            <div className="info">
                <h1>Matias Ortiz</h1>
                <p>
                    Soy Desarrollador Mobile con conocimientos en
                    <span style={{ color: "#61DAFB" }}> React Native </span>
                    para aplicaciones multiplataforma y
                    <span style={{ color: "#7F52FF" }}> Kotlin </span>
                    para desarrollo Android nativo.
                    Además, integro servicios como
                    <span style={{ color: "#3ECF8E" }}> Supabase </span> y
                    <span style={{ color: "#FFCA28" }}> Firebase </span>
                    para construir aplicaciones completas de principio a fin.
                </p>
                <hr />
                <div className="redes">
                    <a href="https://github.com/matiasortizf" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/matiasortizf/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>

            <div className="low-arrow">
                <a href="#projects"><img className="low-arrow" src={lowArrow} alt="low-arrow-icon" /></a>
            </div>


        </header>

    )
}

export default Header
