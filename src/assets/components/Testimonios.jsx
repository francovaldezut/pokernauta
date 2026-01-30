import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import graficaDamian from '../images/graficas/damianScocia.webp';
import graficaEfrain from '../images/graficas/EfrainMonoConNavaja.webp';
import JoseRodriguez from '../images/graficas/joseRodriguez.webp';
import maur1C from '../images/graficas/maur1C.webp';
import tonyHuracan from '../images/graficas/TonyHuracan.webp';
import MaxiGaitan from '../images/graficas/MaxiGaitan.webp';


const Testimonios = () => {
    const [jugadorSeleccionado, setJugadorSeleccionado] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimoniosData = [
        { id: 1, nombre: "Damian Scocia", rol: "Cash Games", texto: "Juego al poker hace tiempo pero decidí darle seriedad. Muy recomendable.Estuve una sola clase con Pokernautas y le agradezco su trabajo. mis winrates se dispararon", nivel: "NL5", plan: "Escuela", grafica: graficaDamian },
        { id: 2, nombre: "Efrain Mono con navaja", rol: "Cash Games", texto: "Primer mes estudiando y aplicando el contenido de pokernautas. Ahora que tengo un conocimiento mas solido sobre el poker estoy siendo ganador en las mesas", nivel: "NL10", plan: "Escuela", grafica: graficaEfrain },
        { id: 3, nombre: "Ariel Rodriguez", rol: "Cash Games", texto: "No tengo palabras para pokernauta. Mis stats se disparon desde el dia que inicie en la escuela. Se los agradezco mucho. Estoy en NL2 pero seguire en la escuela hasta llegar a NL25", nivel: "NL5", plan: "Escuela", grafica: JoseRodriguez },
        { id: 4, nombre: "Maur1C", rol: "Cash Games", texto: "Desde que empece en Pokernauta tengo un enfoque mas claro sobre el juego. Mis decisiones son mas consistentes y mis winrates subieron considerablemente.", nivel: "NL25", plan: "Escuela", grafica: maur1C },
        { id: 5, nombre: "Tony Huracan", rol: "Cash Games", texto: "Despues de la revision y comentarios del jefe Manuel mi poker ha mejorado considerablemnte.", nivel: "Escuela", plan: "Escuela", grafica: tonyHuracan },
        { id: 6, nombre: "Maxi Gaitan", rol: "Cash Games", texto: "Gracias a Pokernauta por estar presente en todo momento. Estoy aplicando todos los consejos que me dan y me esta yendo fabuloso", nivel: "NL25", plan: "Escuela", grafica: MaxiGaitan }
    ];

    // Controles del carrusel
    const nextSlide = () => {
        if (currentIndex < testimoniosData.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <section className='testimonios-dark'>
            <h2 className='title-main'>Testimonios de nuestros <span className='purple-gradient'>alumnos</span></h2>
            
            <div className='carousel-container'>
                {/* Flecha Izquierda */}
                <button className={`nav-btn prev ${currentIndex === 0 ? 'hidden' : ''}`} onClick={prevSlide}>&lt;</button>

                <div className='carousel-window'>
                    <div 
                        className='testimonios-track' 
                        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                    >
                        {testimoniosData.map((t) => (
                            <div key={t.id} className='t-card-wrapper'>
                                <div className='t-card'>
                                    {t.nivel && <div className='t-level-tag'>{t.nivel}</div>} 
                                    <div className='t-header'>
                                        <div className='t-avatar'></div>
                                        <div>
                                            <h4>{t.nombre}</h4>
                                            <span>{t.rol}</span>
                                        </div>
                                    </div>
                                    <p>{t.texto}</p>
                                    <div className='t-footer'>
                                        <div className='t-tag'>{'Plan ' + t.plan}</div>
                                        <div className='t-button'>
                                            {t.grafica && (
                                                <button className='btn-grafica' onClick={() => setJugadorSeleccionado(t)}>
                                                    Ver grafica
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Flecha Derecha */}
                <button className={`nav-btn next ${currentIndex >= testimoniosData.length - 3 ? 'hidden' : ''}`} onClick={nextSlide}>&gt;</button>
            </div>

            {/* PORTAL FUERA DE TODO EL BUCLE */}
            {jugadorSeleccionado && createPortal(
                <div className="modal-poker-overlay" onClick={() => setJugadorSeleccionado(null)}>
                    <div className="modal-poker-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-poker-close" onClick={() => setJugadorSeleccionado(null)}>&times;</button>
                        <div className="modal-poker-header-info">
                            <h3>Gráfica de {jugadorSeleccionado.nombre}</h3>
                            <span>{jugadorSeleccionado.rol} - {jugadorSeleccionado.nivel}</span>
                        </div>
                        <div className="modal-poker-img-container">
                            <img src={jugadorSeleccionado.grafica} alt="Gráfica" onLoad={(e) => e.target.classList.add('loaded')} />
                        </div>
                        <p className="modal-poker-footer-text">Resultados verificados</p>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
};

export default Testimonios;