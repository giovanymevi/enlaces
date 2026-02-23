import React from 'react';
import './App.css';

function App() {
  const handleButtonClick = (platform) => {
    const urls = {
      ingresar: '#',
      github: 'https://github.com',
      whatsapp: 'https://wa.me/1234567890',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    };
    
    if (urls[platform]) {
      window.open(urls[platform], '_blank');
    }
  };

  return (
    <div className="app">
      <div className="overlay">
        <div className="container">
          {/* Logo o título */}
          <div className="header">
            <h1 className="brand-title">amandarina.cl</h1>
          </div>

          {/* Botones */}
          <div className="buttons-container">
            <button 
              className="btn btn-ingresar"
              onClick={() => handleButtonClick('ingresar')}
            >
              INGRESAR
            </button>

            <button 
              className="btn btn-github"
              onClick={() => handleButtonClick('github')}
            >
              <span className="btn-icon">🐙</span>
              GitHub
            </button>

            <button 
              className="btn btn-whatsapp"
              onClick={() => handleButtonClick('whatsapp')}
            >
              <span className="btn-icon">📱</span>
              WhatsApp
            </button>

            <button 
              className="btn btn-facebook"
              onClick={() => handleButtonClick('facebook')}
            >
              <span className="btn-icon">📘</span>
              Facebook
            </button>

            <button 
              className="btn btn-instagram"
              onClick={() => handleButtonClick('instagram')}
            >
              <span className="btn-icon">📷</span>
              Instagram
            </button>
          </div>

          {/* Elementos de diseño de la primera imagen */}
          <div className="design-elements">
            <div className="innovation-text">
              <p className="innovation-line">INNOVACIÓN QUE TRANSFORMA</p>
              <div className="tech-tags">
                <span className="tag">LEGAL-TECH</span>
                <span className="tag">AUTOMATIZACIÓN</span>
                <span className="tag">DISEÑO IMPACTANTE</span>
              </div>
              <p className="impact-text">CLARIDAD + INNOVACIÓN = IMPACTO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;