import React from 'react';


import { FaInstagram, FaDiscord, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className='footer-main'>
            <div className='footer-container'>
                
                {/* Columna 1: Marca */}
                <div className='footer-brand'>
                    <h4 className='footer-logo'>POKER<span>NAUTA</span></h4>
                    <p className='footer-description'>
                        Transformá tu juego. Analizá tu mente. Domina la mesa con estrategia profesional.
                    </p>
                    <p className='footer-copyright'>&copy; {new Date().getFullYear()} Escuela de Poker. Desarrollado para Grinders.</p>
                </div>

                {/* Columna 2: Navegación */}
                <div className='footer-nav'>
                <h4>Navegación</h4>
                <ul>
                    <li><a href="#planes">Planes de Estudio</a></li>
                    <li><a href="#testimonios">Testimonios</a></li>
                    
                </ul>
                </div>

                {/* Columna 3: Redes Sociales */}
                <div className='footer-social'>
                <h4>Mis Redes</h4>
                <div className='social-links'>
                    <a href="https://www.instagram.com/pokernauta/" className='social-item' target='blank'><FaInstagram className='faIcon'/> INSTAGRAM</a>
                    <a href="#" className='social-item' target='blank'><FaDiscord className='faIcon' /> DISCORD</a>
                    <a href="#" className='social-item'><FaYoutube className='faIcon' /> YOUTUBE</a>
                </div>
                </div>

            </div>


        </footer>
    );
};

export default Footer;