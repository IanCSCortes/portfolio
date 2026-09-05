import { useEffect, useState } from 'react'
import './App.css'

const profileUrl = 'https://github.com/IanCSCortes'
const hiddenRepositories = new Set(['portfolio', 'iankadu', 'simple-crud'])
const projectDetails = {
  'revista-elitte': {
    description: 'Site da Revista Elitte, desenvolvido com React e Node.js. O projeto ainda está em construção.',
    liveUrl: 'https://revista-elitte.vercel.app/',
  },
  'template-responsivo': {
    description: 'Página web responsiva desenvolvida utilizando HTML5 e CSS3, com media queries para adaptação a diferentes tamanhos de tela.',
    technologies: 'HTML5 · CSS3',
    liveUrl: 'https://template-responsivo.vercel.app/',
  },
  'simple-crud': {
    description: 'Aplicação CRUD para gestão de alunos, com criação, consulta, edição e exclusão de registros.',
    technologies: 'HTML5 · CSS3 · PHP · CodeIgniter 4 · JWT · React · MySQL 8',
  },
}

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

function App() {
  const [projects, setProjects] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch('https://api.github.com/users/IanCSCortes/repos?sort=updated&per_page=12')
        if (!response.ok) throw new Error('GitHub indisponível')
        const repos = await response.json()
        setProjects(repos.filter((repo) => !repo.fork && !repo.archived && !hiddenRepositories.has(repo.name.toLowerCase())))
        setStatus('ready')
      } catch {
        setStatus('error')
      }
    }
    loadProjects()
  }, [])

  return (
    <main>
      <nav className="nav wrap" aria-label="Navegação principal">
        <a className="brand" href="#inicio">IC<span>.</span></a>
        <div className="nav-links"><a href="#projetos">Projetos</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></div>
      </nav>

      <section id="inicio" className="hero wrap">
        <p className="eyebrow">PORTFÓLIO — 2026</p>
        <div className="hero-content">
          <h1><span className="headline-strong">Do problema à solução,</span><br /><em>com tecnologia.</em></h1>
          <div className="hero-profile"><img className="profile-photo" src="/ian-cortes.png" alt="Ian Carlos de Sousa Cortes" /><div className="hero-aside"><p>Olá, eu sou Ian Carlos de Sousa Cortes. Desenvolvedor focado em JavaScript, Node.js, APIs e banco de dados.</p><a className="text-link" href="#projetos">Conheça meu trabalho <ArrowUpRight /></a></div></div>
        </div>
        <div className="hero-line"><span>DESENVOLVEDOR · LAVRAS, MG</span><span>JAVASCRIPT · NODE.JS · APIS · BANCO DE DADOS</span></div>
      </section>

      <section id="projetos" className="projects-section wrap">
        <div className="section-heading"><p className="eyebrow">01 — SELEÇÃO</p><h2>Projetos no<br /><em>GitHub.</em></h2><a className="outline-button" href={profileUrl} target="_blank" rel="noreferrer">Ver perfil completo <ArrowUpRight /></a></div>
        <div className="project-grid" aria-live="polite">
          {status === 'loading' && <p className="feedback">Carregando projetos selecionados…</p>}
          {status === 'error' && <p className="feedback">Não foi possível carregar os projetos agora. <a href={profileUrl} target="_blank" rel="noreferrer">Visite meu GitHub <ArrowUpRight /></a></p>}
          {projects.map((project, index) => {
            const details = projectDetails[project.name.toLowerCase()]
            return (
            <article className="project-card" key={project.id}>
              <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="project-body"><h3>{project.name.replaceAll('-', ' ')}</h3><p>{details?.description || project.description || 'Projeto desenvolvido para explorar soluções web e boas experiências de uso.'}</p><div className="project-meta"><span>{details?.technologies || project.language || 'Web'}</span><span>{project.stargazers_count > 0 ? `★ ${project.stargazers_count}` : 'Repositório público'}</span></div><div className="project-links">{(details?.liveUrl || project.homepage) && <a className="preview-link" href={details?.liveUrl || project.homepage} target="_blank" rel="noreferrer" aria-label={`Abrir preview do projeto ${project.name}`}>Ver preview <ArrowUpRight /></a>}<a href={project.html_url} target="_blank" rel="noreferrer" aria-label={`Abrir repositório ${project.name} no GitHub`}>Ver repositório <ArrowUpRight /></a></div></div>
            </article>
            )
          })}
        </div>
      </section>

      <section id="sobre" className="about wrap"><p className="eyebrow">02 — SOBRE MIM</p><div><h2>Curiosidade técnica,<br /><em>resultado na prática.</em></h2><p>Cursando Análise e Desenvolvimento de Sistemas, com foco em back-end, lógica e construção de APIs.</p><p>Venho de experiência profissional em ambientes de alta pressão, que fortaleceu minha responsabilidade, organização, resolução de problemas e trabalho em equipe. Busco uma oportunidade na tecnologia para evoluir tecnicamente e contribuir com comprometimento e mentalidade de equipe.</p><p className="skills">COMPETÊNCIAS — PHP · CSS · JAVASCRIPT · GIT · MYSQL</p></div></section>

      <footer id="contato" className="footer wrap"><p className="eyebrow">03 — VAMOS CONVERSAR?</p><a className="contact-email" href="mailto:iancscortes@gmail.com">iancscortes@gmail.com <ArrowUpRight /></a><div className="footer-bottom"><span>© {new Date().getFullYear()} Ian Cortes</span><div><a href={profileUrl} target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com/in/iancortes" target="_blank" rel="noreferrer">LinkedIn</a></div></div></footer>
    </main>
  )
}

export default App
