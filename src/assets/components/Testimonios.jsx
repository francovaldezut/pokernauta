import React from 'react';


const Testimonios = () => {
    const testimoniosData = [
    {
        id: 1,
        nombre: "Carlos R.",
        rol: "Alumno Plan Escuela",
        texto: "Pasé de ser un recreativo que regalaba stacks a entender el porqué de cada movimiento. La claridad de las clases en vivo es otro nivel.",
        nivel: "NL10" // <-- ¡Nuevo campo!
    },
    {
        id: 2,
        nombre: "Marina P.",
        rol: "Cash Games Pro",
        texto: "El análisis de leaks con el HUD me abrió los ojos. Literalmente tapamos huecos por donde se me iba el dinero. Mi winrate lo agradece.",
        nivel: "NL50" // <-- ¡Nuevo campo!
        },
    {
        id: 3,
        nombre: "Juan M.",
        rol: "MTT Player", // Aunque sea MTT, podemos poner un equivalente para el nivel de la tarjeta
        texto: "Hacer Hiding Coach es adrenalina pura. Tener a alguien corrigiendo tus rangos mientras estás en el spot es la forma más rápida de aprender.",
        nivel: "NL100+" // <-- ¡Nuevo campo!
    }
    ];

    return (
        <section className='testimonios-dark'>
            <h2 className='title-main'>Testimonios de nuestros <span className='purple-gradient'>alumnos</span></h2>
            
            <div className='testimonios-grid'>
                {testimoniosData.map((t) => (
                <div key={t.id} className='t-card'>
                    {/* NUEVA BANDITA LATERAL */}
                    {t.nivel && <div className='t-level-tag'>{t.nivel}</div>} 

                    <div className='t-header'>
                        <div className='t-avatar'></div>
                        <div>
                            <h4>{t.nombre}</h4>
                            <span>{t.rol}</span>
                        </div>
                        </div>
                        <p>{t.texto}</p>
                        <div className='t-tag'>{t.rol.includes("1 a 1") || t.rol.includes("Coach") ? "Sesión VIP" : "Plan Escuela"}</div>
                </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonios;