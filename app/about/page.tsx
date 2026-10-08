'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Charles Emmanuel Cruz</h1>
              <p className={styles.role}>BS IT Graduate</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                Philippines
              </div>
            </div>
          </div>
          
          <div className={styles.headerActions}>
            <a 
              href="https://github.com/charlsieemman" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I&apos;m a fresh graduate of BS Information Technology with a versatile
                set of skills that spans software development, network engineering, 
                and data analysis.
              </p>
              
              <p className={styles.paragraph}>
                As I start my career, I am eager to apply my knowledge and skills to real-world projects,
                contribute to innovative solutions, and continue learning in the ever-evolving field of technology.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Internship</span>
                </div>
                <h3 className={styles.expRole}>Backend Developer Intern</h3>
                <p className={styles.expCompany}>DOST CO-PES</p>
                <ul className={styles.expList}>
                  <li>Implemented Apache Kafka to enable decoupled communication between microservices</li>
                  <li>Participated in agile development processes and code reviews</li>
                  <li>Developed and maintained RESTful APIs using Node.js and Express</li>
                  <li>Contributed to the design and implementation of microservice interconnectivity</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>College Organizations</span>
                </div>
                <h3 className={styles.expRole}>Managing Director</h3>
                <p className={styles.expCompany}>The HERALDO FILIPINO</p>
                <ul className={styles.expList}>
                  <li>Monitored and managed the day-to-day operations of the publication</li>
                  <li>Utilized an internal ERP system for procurement of materials and equipment</li>
                  <li>Led a team of editors to ensure quality operational workflow</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>College Organizations</span>
                </div>
                <h3 className={styles.expRole}>Web Manager</h3>
                <p className={styles.expCompany}>The HERALDO FILIPINO</p>
                <ul className={styles.expList}>
                  <li>Ensured maximum uptime on the website and implemented security measures against potential threats</li>
                  <li>Redesigned the UI/UX into a modern, user-friendly interface</li>
                  <li>Managed the website content using WordPress</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Languages</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Java</span>
                    <span className={styles.skillTag}>JavaScript</span>
                    <span className={styles.skillTag}>TypeScript</span>
                    <span className={styles.skillTag}>Python</span>
                    <span className={styles.skillTag}>C#</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Backend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Node.js</span>
                    <span className={styles.skillTag}>REST APIs</span>
                    <span className={styles.skillTag}>Microservices Architecture</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Frontend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>HTML5</span>
                    <span className={styles.skillTag}>CSS3</span>
                    <span className={styles.skillTag}>React</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Frameworks</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Express.js</span>
                    <span className={styles.skillTag}>ASP.NET</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Databases</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>MongoDB</span>
                    <span className={styles.skillTag}>PostgreSQL</span>
                    <span className={styles.skillTag}>MS SQL Server</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>DevOps, Tools, & Messaging Systems</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Apache Kafka</span>
                    <span className={styles.skillTag}>Docker</span>
                    <span className={styles.skillTag}>Podman</span>
                    <span className={styles.skillTag}>Kubernetes</span>
                    <span className={styles.skillTag}>Git</span>
                    <span className={styles.skillTag}>Postman</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Platforms & Technologies</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>WordPress</span>
                    <span className={styles.skillTag}>cPanel</span>
                    <span className={styles.skillTag}>Figma</span>
                    <span className={styles.skillTag}>Google Apps Script</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Writing Section 
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Writing</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I&apos;ve had the pleasure of writing for some amazing publications 
                as a freelance technical author:
              </p>
              
              <div className={styles.writingLinks}>
                <a 
                  href="https://www.100ms.live/blog/author/nitin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>100ms Blog</span>
                  <VscLinkExternal size={14} />
                </a>
                
                <a 
                  href="https://blog.logrocket.com/author/nitinranganath/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>LogRocket Blog</span>
                  <VscLinkExternal size={14} />
                </a>
                
                <a 
                  href="https://dev.to/itsnitinr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>DEV.to</span>
                  <VscLinkExternal size={14} />
                </a>
              </div>
            </div>
          </section>*/}

          {/* Beyond Code Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Beyond Code</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Aside from programming and writing, I enjoy reading novels, 
                playing the piano, or just enjoying chill games.
              </p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
