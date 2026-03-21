import React from "react";
import styles from "./App.module.scss";
import { info } from "./info/Info";

function App() {
  const { profile, navigation, hero, stats, highlightCards, experience, projects, technicalAreas, contact, socialLinks } = info;

  return (
    <div className={styles.appShell}>
      <div className={styles.ambientGlow} />
      <div className={styles.page}>
        <aside className={styles.sidebar}>
          <div className={styles.profileCard}>
            <div className={styles.profileFrame}>
              <div className={styles.orbitLarge} />
              <div className={styles.orbitSmall} />
              <img className={styles.profileImage} src={profile.portrait} alt={profile.fullName} />
            </div>

            <div className={styles.profileContent}>
              <p className={styles.profileKicker}>{profile.status}</p>
              <h1 className={styles.profileName}>{profile.fullName}</h1>
              <p className={styles.profileSummary}>{profile.summary}</p>

              <ul className={styles.profileMeta}>
                <li>{profile.focus}</li>
                <li>{profile.location}</li>
                <li>{profile.background}</li>
                <li>{profile.resumeLabel}</li>
              </ul>

              <div className={styles.profileLinks}>
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className={styles.content}>
          <nav className={styles.topNav} aria-label="Section navigation">
            {navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <section id="hero" className={styles.heroSection}>
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
            <div className={styles.heroHeading}>
              <span>{hero.headingTop}</span>
              <span>{hero.headingBottom}</span>
            </div>
            <p className={styles.heroBody}>{hero.blurb}</p>
          </section>

          <section className={styles.statsSection} aria-label="Key facts">
            {stats.map((stat) => (
              <article key={stat.label} className={styles.statCard}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </section>

          <section className={styles.highlightGrid} aria-label="Technical focus areas">
            {highlightCards.map((card) => (
              <article key={card.title} className={`${styles.highlightCard} ${styles[card.theme]}`}>
                <p className={styles.cardLabel}>Focus Area</p>
                <h2>{card.title}</h2>
                <ul>
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section id="experience" className={styles.sectionBlock}>
            <div className={styles.sectionIntro}>
              <p>Experience</p>
              <h2>Built on real work, not template claims.</h2>
            </div>
            <div className={styles.timeline}>
              {experience.map((item) => (
                <article key={`${item.company}-${item.role}`} className={styles.timelineCard}>
                  <span>{item.period}</span>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className={styles.sectionBlock}>
            <div className={styles.sectionIntro}>
              <p>Projects</p>
              <h2>Work that reflects cloud, product, and systems thinking.</h2>
            </div>
            <div className={styles.projectGrid}>
              {projects.map((project) => (
                <article key={project.title} className={styles.projectCard}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.tagRow}>
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.sectionBlock}>
            <div className={styles.sectionIntro}>
              <p>Technical Areas</p>
              <h2>Crossing application delivery, infrastructure, and performance.</h2>
            </div>
            <div className={styles.areaGrid}>
              {technicalAreas.map((area) => (
                <article key={area.title} className={styles.areaCard}>
                  <h3>{area.title}</h3>
                  <ul>
                    {area.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className={styles.contactSection}>
            <p>Contact</p>
            <h2>{contact.title}</h2>
            <p className={styles.contactText}>{contact.text}</p>
            <div className={styles.contactActions}>
              <a href={contact.primaryHref}>{contact.primaryLabel}</a>
              <a href={contact.secondaryHref} target="_blank" rel="noreferrer">
                {contact.secondaryLabel}
              </a>
            </div>
            <span className={styles.contactEmail}>{profile.email}</span>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
