// src/components/MainContent.js
import React from 'react';

const Principal = () => {
  return (
    <div>
        <section id="services" className="services">
        <h2>Serviços</h2>
        <div className="service-box">
            <h3>Terapia para Ansiedade e Estresse</h3>
            <p>Ajude sua mente a encontrar a calma que você merece.</p>
        </div>
        <div className="service-box">
            <h3>Terapia de Casal</h3>
            <p>Fortaleça seus relacionamentos e construa conexões mais saudáveis.</p>
        </div>
        <div className="service-box">
            <h3>Apoio em Situações de Luto</h3>
            <p>Suporte emocional em momentos de perda.</p>
        </div>
    </section>

    <section id="testimonials" className="testimonials">
        <h2>Depoimentos</h2>
        <div className="testimonial-box">
            <p>"Minha experiência com o Dr. GersonES foi transformadora. Encontrei apoio e confiança para lidar com meus desafios emocionais."</p>
            <span>- Paciente Anônimo</span>
        </div>
        <div className="testimonial-box">
            <p>"O cuidado e a atenção que recebi na terapia foram fundamentais para minha recuperação emocional."</p>
            <span>- Paciente Anônimo</span>
        </div>
    </section>

    <section id="about" className="about">
        <h2>Sobre Mim</h2>
        <div className="about-container">
            <img src="https://avatars.githubusercontent.com/u/172892640?v=4" alt="Foto do Psicólogo" />
            <div>
                <p>Olá, sou GersonES, psicólogo especializado em Terapia Cognitivo-Comportamental com mais de 10.00 anos de experiência. Acredito que a terapia é uma ferramenta poderosa para a transformação pessoal e estou aqui para ajudá-lo a viver uma vida mais plena e equilibrada.</p>
            </div>
        </div>
    </section>

    <section id="contact" className="contact">
        <h2>Contato</h2>
        <form id="contact-form" action="send_email.php" method="POST">
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" required />
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
            <label for="message">Como posso ajudar?</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Enviar</button>
        </form>
    </section>

    </div>
  );
};

export default Principal;
