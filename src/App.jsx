import { useEffect } from 'react';

const technologies = [
  'React',
  'JavaScript (ES6+)',
  'TypeScript',
  'Node.js',
  'HTML5 / CSS3',
  'Git & GitHub',
  'REST APIs',
  'Figma',
];

const projects = [
  {
    title: 'Plateforme e-commerce',
    description:
      'Développement d\'une boutique en ligne performante avec paiement sécurisé et tunnel d\'achat optimisé.',
  },
  {
    title: 'Dashboard analytics',
    description:
      'Conception d\'un tableau de bord interactif pour visualiser les KPI métier et piloter les décisions.',
  },
  {
    title: 'Application de gestion RH',
    description:
      'Application interne pour gérer les congés, contrats, profils collaborateurs et workflows d\'approbation.',
  },
];

const companies = ['TechNova', 'Digital Factory', 'Cloud Solutions', 'FinEdge'];

const navLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#technologies', label: 'Technologies' },
  { href: '#projects', label: 'Projets' },
  { href: '#companies', label: 'Entreprises' },
  { href: '#contact', label: 'Contact' },
];

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />

      <header className="site-header" id="hero">
        <nav className="navbar container">
          <h1 className="logo">Portfolio React</h1>

          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <a className="btn btn-small" href="/CV.pdf" download>
            Télécharger CV
          </a>
        </nav>
      </header>

      <main>
        <section className="hero container reveal visible">
          <p className="badge">Développeur Frontend React</p>
          <h2>Je transforme vos idées en expériences web élégantes et performantes.</h2>
          <p className="lead">
            Découvrez mon parcours, les technologies que j\'utilise, mes projets récents et les
            entreprises qui m\'ont fait confiance.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#projects">
              Voir mes projets
            </a>
            <a className="btn btn-outline" href="#contact">
              Me contacter
            </a>
          </div>
        </section>

        <section className="section container reveal" id="about">
          <h3>À propos de moi</h3>
          <p>
            Passionné par le développement web, j\'accompagne les équipes produit dans la création
            d\'interfaces intuitives, accessibles et maintenables. Mon parcours m\'a amené à livrer
            des applications à fort trafic avec un haut niveau de qualité UX/UI.
          </p>
        </section>

        <section className="section container reveal" id="technologies">
          <h3>Technologies</h3>
          <ul className="chip-list">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>

        <section className="section container reveal" id="projects">
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

        <section className="section container reveal" id="companies">
          <h3>Entreprises où j\'ai travaillé</h3>
          <ul className="company-list">
            {companies.map((company) => (
              <li key={company}>{company}</li>
            ))}
          </ul>
        </section>

        <section className="section container reveal" id="contact">
          <h3>Contact</h3>
          <p className="lead">Vous avez une opportunité ou un projet ? Écrivez-moi directement.</p>
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
        <p>© {new Date().getFullYear()} Portfolio React — Tous droits réservés.</p>
      </footer>
    </>
  );
}

export default App;
