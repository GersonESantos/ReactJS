// src/components/Banner.js
import React from 'react';

const Banner = () => {
  return (
    <section className="hero">
    <div className="hero-content">
        <img src="https://gersonesantos.github.io/pisico/imagens/icone.png" alt="logo" class="img-fluid me-3" width="40px" />
        <div className="hero-text">
            <h2>Te ajudamos a se </h2>
            <h2>compreender melhor para</h2> 
            <h2>enfrentar os seus desafios</h2>
        </div>
    </div>
    <p>Terapia individual e de casal para ajudá-lo a superar desafios emocionais e construir uma vida equilibrada.</p>
    <a href="#contact" className="cta">Iniciar uma conversa</a>
</section>
  );
};

export default Banner;
