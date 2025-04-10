import React from "react";
import './index.css'; // Certifique-se de que o arquivo de estilo está correto

export default function Portfolio() {
  return (
    <main className="container d-flex flex-column justify-content-center align-items-center py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 mb-2 text-primary">Ian Cortes</h1>
        <p className="lead text-muted mb-4">
          Desenvolvedor Front-End focado em interfaces modernas e responsivas
        </p>
      </header>

      <section className="w-100 mb-5 text-center">
        <h2 className="h3 mb-4">Sobre mim</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
          Tenho 26 anos, estou em transição de carreira e focado nos estudos na área de
          desenvolvimento web. Atualmente curso a formação Full Stack da B7Web, com foco em
          Front-End. Estou em busca da minha primeira oportunidade na área para aplicar
          meus conhecimentos e crescer como desenvolvedor.
        </p>
      </section>

      <section className="w-100 mb-5 text-center">
        <h2 className="h3 mb-4">Projeto em Destaque</h2>
        <div className="card shadow-lg border-0 rounded-lg mx-auto" style={{ maxWidth: "800px" }}>
          <div className="card-body">
            <h5 className="card-title">Template Responsivo com HTML e CSS</h5>
            <p className="card-text">
              Página web responsiva desenvolvida utilizando apenas HTML5 e CSS3, com uso
              de media queries para adaptação a diferentes tamanhos de tela.
            </p>
            <p className="text-muted mb-3">
              <strong>Tecnologias:</strong> HTML5, CSS3
            </p>
            <a
              href="https://github.com/IanCSCortes/Template-responsivo"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no GitHub
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Template Responsivo com HTML e CSS</h5>
            <p className="card-text">
              Página web responsiva desenvolvida utilizando apenas HTML5 e CSS3, com uso
              de media queries para adaptação a diferentes tamanhos de tela.
            </p>
            <p className="text-muted mb-3">
              <strong>Tecnologias:</strong> HTML5, CSS3
            </p>
            <a
              href="https://github.com/IanCSCortes/Template-responsivo"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no GitHub
            </a>
          </div>
        </div>
      </section>
      <section className="w-100 mb-5 text-center">
        <h2 className="h3 mb-4">Projeto em Destaque</h2>
        <div className="card shadow-lg border-0 rounded-lg mx-auto" style={{ maxWidth: "800px" }}>
          <div className="card-body">
            <h5 className="card-title">Template Responsivo com HTML e CSS</h5>
            <p className="card-text">
              Página web responsiva desenvolvida utilizando apenas HTML5 e CSS3, com uso
              de media queries para adaptação a diferentes tamanhos de tela.
            </p>
            <p className="text-muted mb-3">
              <strong>Tecnologias:</strong> HTML5, CSS3, PHP, Codeigniter 4, JWT, React, MySQL 8.
            </p>
            <a
              href="https://github.com/IanCSCortes/Simple-CRUD"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="w-100 mb-5 text-center">
        <h2 className="h3 mb-4">Projeto em Destaque</h2>
        <div className="card shadow-lg border-0 rounded-lg mx-auto" style={{ maxWidth: "800px" }}>
          
        </div>
      </section>

      <section className="w-100 text-center">
        <h2 className="h3 mb-4">Contato</h2>
        <ul className="list-unstyled">
          <li>
            <a className="text-decoration-none text-dark" href="mailto:ian@example.com">
              <strong>Email:</strong> iancscortes@gmail.com
            </a>
          </li>
          <li>
            <a className="text-decoration-none text-dark" href="https://linkedin.com/in/iancortes" target="_blank" rel="noopener noreferrer">
              <strong>LinkedIn:</strong> linkedin.com/in/iancortes
            </a>
          </li>
          <li>
            <a className="text-decoration-none text-dark" href="https://github.com/IanCSCortes" target="_blank" rel="noopener noreferrer">
              <strong>GitHub:</strong> github.com/IanCSCortes
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
