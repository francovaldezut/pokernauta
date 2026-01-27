import React from 'react'
import escuelapoker from '../images/escuelapokerPersona.webp'


const AboutMe = () => {
    return (
        <section className='containerAboutMe' id='aboutMe'>
            <div className='aboutMe'>
                <div className='cardAboutMe'>
                    <img src={escuelapoker} alt="Escuela de poker" />

                </div>
                <div className='textAboutMe'>
                    <div>
                        <h2>Manuel Arenas</h2>
                        <p>Soy jugador profesional de póker, creador de contenido y estudiante de Ingeniería Industrial. Mi carrera se ha consolidado en los niveles más exigentes, compitiendo con solidez en <span>NL200</span> y especializándome en la modalidad de mesas rápidas (Rush & Cash y Zoom), además de contar con una amplia experiencia en mesas regulares.</p>
                        <p>Mi enfoque combina el análisis riguroso de la ingeniería con la práctica de alto nivel en las mesas. Mi objetivo es transmitirte no solo la estrategia técnica, sino los valores que el póker me ha enseñado: paciencia, foco y resiliencia. En <span>Pokernauta</span>, vuelco toda mi experiencia para que tu proceso de aprendizaje sea eficiente, ordenado y, sobre todo, rentable.</p>
                        <h3>Mi enfoque para los proximos años...</h3>
                        <ul>
                            <li>📈 Avanzar en mi carrera profesional</li>
                            <li>💡 Seguir creando contenido de valor</li>
                            <li>🌐 Expandir la escuela y comunidad de Pokernauta</li>
                            <li>🧠 Desarrollar nuevos cursos y recursos educativos</li>
                        </ul>
                    </div>
                </div>
                    
            </div>
        </section>
    )
}

export default AboutMe
