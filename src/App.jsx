import {useEffect,useRef } from 'react'
import './App.css'
import Testimonios from './assets/components/Testimonios.jsx'
import Footer from './assets/components/Footer.jsx'
import AboutMe from './assets/components/AboutMe.jsx'

import fichaRoja from './assets/images/fichaRoja.webp'
import fichaVerde from './assets/images/fichaVerde.webp'

import { FaDiscord } from 'react-icons/fa'
import Filosofia from './assets/components/Filosofia.jsx'
import PlayLists from './assets/components/PlayLists.jsx'


function App() {

  const bannerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // Se activa cuando el 50% del banner es visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Buscamos todos los h1 dentro del contenedor y les añadimos la clase
          const texts = entry.target.querySelectorAll('.reveal-text');
          texts.forEach((text) => text.classList.add('visible'));
        }
      });
    }, observerOptions);

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    // Limpieza al desmontar el componente
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header id='iniciot '>
          <nav>
            <div>
              <a href="#" className='nombreMarca'>POKERNAUTA</a>
            </div>

            

            <ul>
              <li>
                <a href="#planes">Planes</a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSefAg0PSsfQWTpNwu50vK3_5pjxeoccTZNZmeNa4wSpF8oDlg/viewform">Contactame</a>
              </li>
              <li>
                <a href="#aboutMe">Sobre mi</a>
              </li>
              <li>
                <a href="#contenido">Videos</a>
              </li>
              <li>
                <a href="" className='discordIcon'><FaDiscord /></a>
              </li>
              
            </ul>
        </nav>
      </header>

      <section className='hero-section'>
        {/* Contenedor que define el espacio completo y usa la imagen de fondo */}
        <div className='banner-background'> 
            
        </div>
    
        {/* Contenedor que se superpone, ocupa el mismo espacio y tendrá el efecto borroso */}
        <div className='glass-overlay'> 
            <h2>¡Lleva tu póker más allá!</h2>
            <a href="#planes">VER PLANES</a>
        </div>
        <div className='container-chips'> 
          <img src={fichaRoja} alt="Ficha roja" className='fichaRoja' />
          <img src={fichaVerde} alt="Ficha verde" className='fichaVerde' />
        </div>
      </section>

      <section className='claves-section'>
        <div className='containerNivelesSection'>
          <div className='claves-conteiner'>
            
            <div className='conteinerImagenClaves'>
              <span>No importa tu <span className="span-nivel" >EXPERIENCIA</span>
              </span>
              <div className='circle-degredee'></div>
              
            </div>
            <div className='conteinerNiveles'>
              
              <div className='niveless'>
                <div className='numero-niveles'>
                  <h1>1

                  </h1>
                </div>
                
                <div className='texto-niveles'>
                  <div className='headerTextoNiveles'>
                    <span>Principiante</span>
                    
                    <p>Te enseñaremos lo basico del poker, desde tipos de jugadas y reglas hasta estrategias basicas del poker para que puedas empezar a jugar de forma solida en las mesas</p>
                  </div>
                  <div >
                    <div className='limites'>
                      <span className='spanLimite NL2'>
                        NL2
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='niveless'>
                <div className='numero-niveles'>
                  <h1>2
                    
                  </h1>

                </div>
                <div className='texto-niveles'>
                  <div className='headerTextoNiveles'>
                    <span>Intermedio</span>
                  
                  <p>Si ya tienes conocimientos basicos del poker, en este nivel te ayudaremos a mejorar tu juego y a entender conceptos mas avanzados para que puedas llevar tu juego al siguiente nivel</p>
                  </div>
                  
                  
                    <div className='limites'>
                      <span className='spanLimite NL5'> 
                        NL5 +
                      </span>
                      <span className='spanLimite NL10'>
                        NL10 +
                      </span>
                    </div>
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>


      <section className='claves-aprender-section'>
        <div className='claves-aprender-conteiner'>
          <h1>Te <span>enseñaremos</span> las claves para lograr <span>resultados</span></h1>
          <p>El poker no es solo saber jugar tambien hay que tener en cuenta factores externos como el tilt o pensamientos a largos plazos en nuestra escuela te mostraremos como lidiar con ellos</p>
        </div>
      </section>
      <section className='section-comunidad'>
        <div className='comunidad-conteiner'>
          <div className='info-comunidad'>
            <h3>No estas solo</h3>
            <p>En pokernauta tenemos una gran comunidad que puedes unirte incluso sin ser miembro a nuestro discord en el podras mirar y comentar manos</p>
          </div>
          <div className='button-comunidad'>
            <button>Unirme a la comunidad</button>
          </div>
          


        </div>
      </section>

      <section className='section-planes' id='planes'>
        <div className='planes-conteiner'>
          <div className='plan-escuela'>
            <div className='plan-badge'>Más Popular</div>
            <div className='containerImagenPlanEscuela'>
            </div>
            <div className='info-plan-escuela'>
              <h2>Plan Escuela</h2>
              <p>Acceso a todos los recursos y materiales de la escuela</p>

            </div>
            <div>
              <p>Algunas actividades y recursos:</p>
              <ul className='beneficios-planes'>
              <li>
                📹 2 Clases semanales en vivo
              </li>
              <li>
                🎯 Seguimiento Personalizado
              </li>
              <li>
                📚 Material de Estudio VIP
              </li>
              <li>
                📂 Acceso al Drive exclusivo
              </li>
              <li>
                🤖 Entrenamiento con Solver
              </li>
              <li>
                💬 Canales Privados de Discusión
              </li>
            </ul>
            </div>

            <div className='plan-footer'>
              <label className='label-select'>Planes disponibles:</label>
              <select className='select-pago'>
                <option value="mensual">Mensual --- $79.99 USD</option>
                <option value="semestral">Semestral --- $399.99 USD</option>
              </select>

              <div className='medios-pago-box'>
                <p>Pagos: Binance, Neteller, Skrill, MP o Salas.</p>
              </div>

              <button className='btn-contratar'>Contactar</button>
            </div>
            
          </div>



          <div className='plan-1a1'>
            <div className='containerImagenPlan1a1'></div>
            <div className='info-plan-escuela'>
              <h2>Plan individual</h2>
              Entrenamiento individual diseñado para maximizar tu winrate y corregir tus errores en tiempo récord.

            </div>
            <div>
              <p>Algunas actividades y recursos:</p>
              <ul className='beneficios-planes'>
              <li>
                
              </li>
              <li>
                🔴 Hiding Coach: Juego en vivo mientras superviso
              </li>
              <li>
                💰 Análisis de Estadísticas:Revisión profunda de tu paquete de manos y tu HUD para detectar y sellar fugas de dinero
              </li>
              <li>
                📈 Ajuste de Rangos: Optimizamos tus tablas preflop y juego postflop
              </li>
              
              <li>
                🤖 Material de Apoyo: Entrega de documentos y ejercicios prácticos para reforzar los spots
              </li>
              <li>
                💬 Consultas Abiertas: Fuera del horario de clase 1 a 1
              </li>
            </ul>
            </div>
            <div className='plan-footer'>
              <label className='label-select'>Packs disponibles:</label>
              <select className='select-pago'>
                <option value="1h">1 Hora: $80 USD</option>
                <option value="2h">Pack 2 Horas --- $140 USD</option>
                <option value="4h">Pack 4 Horas --- $260 USD</option>
              </select>

              <div className='medios-pago-box'>
                <p>Pagos: Binance, Neteller, Skrill, MP o Salas.</p>
              </div>

              <button className='btn-contratar'>Contactar</button>
            </div>
            
            </div>
          
        
        </div>
        
      </section>
      

      <section className='banner-domina-left' ref={bannerRef}>
      <div className='banner-content'>
        <h1 className='reveal-text'>Domina tu juego</h1>
        <h1 className='reveal-text'>Domina tu mente</h1>
        <h1 className='reveal-text'>Domina a tu oponente</h1>
      </div>
    </section>
    <Filosofia />
    <AboutMe />
    <Testimonios />
    <PlayLists />
    <Footer/>
    </>
  )
}

export default App
