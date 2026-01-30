import React from 'react'
import bankRoll from '../images/Miniaturas/bankRoll.webp'
import clasesGratis from '../images/Miniaturas/clasesGratis.webp'
import crusheandoMicros from '../images/Miniaturas/crusheandoMicros.webp'


const PlayLists = () => {
    return (
        <section className="playlists-section" id="contenido">
    <div className="playlists-container">
        <h2 className="title-main">Contenido <span className="purple-gradient">Exclusivo</span></h2>
        
        <div className="playlists-list-vertical">
            {/* Playlist 1 */}
            <a href="https://www.youtube.com/watch?v=bMDlnlc4xg4&list=PLXv9ibLXVv0Bt_XDIIcgGc8sm3mv3NJFE" target="_blank" rel="noreferrer" className="yt-card-horizontal">
                <div className="yt-thumbnail-side">
                    <img src={bankRoll} alt="Post-Flop" />
                    <span className="yt-badge">18 Videos</span>
                    
                </div>
                <div className="yt-info-side">
                    <h3>BANKROLL CHALLENGE 💰 $0 ➜ $500 </h3>
                    <p>Serie de videos donde te muestro que se puede generar una banca en los niveles mas bajos en el poker</p>
                    <span className="yt-view-more">Ver lista completa</span>
                </div>
            </a>

            {/* Playlist 2 */}
            <a href="https://www.youtube.com/watch?v=fmOtkdPqavw&list=PLXv9ibLXVv0CL558MlUXCVwXp_JEg17Ku" target="_blank" rel="noreferrer" className="yt-card-horizontal">
                <div className="yt-thumbnail-side">
                    <img src={crusheandoMicros} alt="Mental Game" />
                    <span className="yt-badge">5 Videos</span>
                    
                </div>
                <div className="yt-info-side">
                    <h3>Crusheando los Microlímites 🔥</h3>
                    <p>En esta serie de videos te enseñaré cómo dominar los microlímites y convertirlos en una fuente de ganancias consistentes.</p>
                    <span className="yt-view-more">Ver lista completa</span>
                </div>
            </a>

            {/* Playlist 3 */}
            <a href="https://www.youtube.com/watch?v=sbKDGB5V68Q&list=PLXv9ibLXVv0AoF2yGZkMSCRxNT09QNdpY" target="_blank" rel="noreferrer" className="yt-card-horizontal">
                <div className="yt-thumbnail-side">
                    <img src={clasesGratis} alt="Revisiones" />
                    <span className="yt-badge">3 Videos</span>
                    
                </div>
                <div className="yt-info-side">
                    <h3>Clases teoricas y prácticas GRATIS 🎓</h3>
                    <p>Acceso a clases teóricas y prácticas gratuitas para principiantes que quieran aprender desde cero.</p>
                    <span className="yt-view-more">Ver lista completa</span>
                </div>
            </a>
        </div>
    </div>
</section>
    )
}

export default PlayLists
