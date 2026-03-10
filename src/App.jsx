const technologies = [
  'React',
  'JavaScript (ES6+)',
  'TypeScript',
  'Node.js',
  'HTML5 / CSS3',
  'Git & GitHub',
];

const projects = [
  {
    title: 'Plateforme e-commerce',
    description: 'Développement d\'une boutique en ligne performante avec paiement sécurisé.',
  },
  {
    title: 'Dashboard analytics',
    description: 'Conception d\'un tableau de bord interactif pour visualiser les KPI métier.',
  },
  {
    title: 'Application de gestion RH',
    description: 'Application interne pour gérer les congés, contrats et fiches collaborateurs.',
  },
];

const companies = ['TechNova', 'Digital Factory', 'Cloud Solutions'];

function App() {
  return (
    <>
      <header className="hero" id="hero">
        <nav className="navbar">
          <h1 className="logo">Mon Portfolio</h1>
          <a className="cta-link" href="#contact">
            Me contacter
          </a>
        </nav>
        <div className="hero-content container">
          <p className="badge">Développeur Frontend React</p>
          <h2>Je crée des expériences web modernes, rapides et utiles.</h2>
          <p>
            Bienvenue sur mon portfolio professionnel. Découvrez mon parcours, mes technologies,
            mes projets et les entreprises avec lesquelles j\'ai collaboré.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#projects">
              Voir mes projets
            </a>
            <a className="btn btn-outline" href="/CV.pdf" download>
              Télécharger CV
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section container" id="about">
          <h3>À propos de moi</h3>
          <p>
            Passionné par le développement web, j\'accompagne les équipes produit dans la création
            d\'interfaces intuitives et maintenables. Mon parcours m\'a permis de travailler sur des
            applications à fort trafic et d\'améliorer l\'expérience utilisateur de nombreux produits.
          </p>
        </section>

        <section className="section section-alt" id="technologies">
          <div className="container">
            <h3>Technologies</h3>
            <ul className="chip-list">
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section container" id="projects">
          <h3>Projets</h3>
          <div className="grid">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-alt" id="companies">
          <div className="container">
            <h3>Entreprises où j\'ai travaillé</h3>
            <ul className="company-list">
              {companies.map((company) => (
                <li key={company}>{company}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section container" id="contact">
          <h3>Contact</h3>
          <p>Vous avez une opportunité ou un projet ? Écrivez-moi directement.</p>
          <form
            className="contact-form"
            action="mailto:contact@monportfolio.dev"
            method="post"
            encType="text/plain"
          >
            <label>
              Nom
              <input type="text" name="nom" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" required />
            </label>
            <button type="submit" className="btn">
              Envoyer email
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Mon Portfolio — Tous droits réservés.</p>
      </footer>
    </>
  );
}

export default App;
