import React from "react";
import './index.css';

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
        Tenho 26 anos, sou um entusiasta da tecnologia em constante evolução, com grande interesse em desenvolvimento front-end. Atualmente, estou cursando o curso Full-Stack da B7Web, onde venho adquirindo uma sólida base de conhecimentos e habilidades práticas em diversas tecnologias web. Busco constantemente aprimorar minhas habilidades e aplicar os conceitos aprendidos em projetos reais.
        Com foco em HTML, CSS, JavaScript e React, nas melhores práticas do desenvolvimento web, tenho me dedicado ao aprendizado contínuo para criar interfaces responsivas, acessíveis e de alta performance. Ao longo da minha jornada acadêmica e profissional, participei de projetos desafiadores, desenvolvendo sites e aplicações que priorizam a experiência do usuário. Estou em busca de uma oportunidade que me permita crescer como profissional, colaborar com equipes criativas e contribuir para soluções inovadoras no campo da tecnologia
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
        </div>
        <div className="card shadow-lg border-0 rounded-lg mx-auto" style={{ maxWidth: "800px" }}>
          <div className="card-body">
            <h5 className="card-title"> CRUD para gestão de alunos.</h5>
            <p className="card-text">
            Este projeto é uma aplicação CRUD (Create, Read, Update, Delete) para a gestão de alunos.
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

      <section className="w-100 text-center">
        <h2 className="h3 mb-4">Contato</h2>
        <ul className="list-unstyled">
          <li>
            <a className="text-decoration-none text-dark" href="mailto:iancscortes@gmail.com">
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
