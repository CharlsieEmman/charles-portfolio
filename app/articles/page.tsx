import { Metadata } from 'next';
import { VscBook, VscLinkExternal } from 'react-icons/vsc';

import AwardCard from '@/components/AwardCard';
import { awards } from '@/data/awards';

import styles from '@/styles/ArticlesPage.module.css';

export const metadata: Metadata = {
  title: 'Awards & Certifications',
};

export default function AwardsPage() {
  const totalAwards = awards.length;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerMain}>
            <div className={styles.iconWrapper}>
              <VscBook className={styles.icon} size={24} />
            </div>

            <div className={styles.headerContent}>
              <div className={styles.headerTop}>
                <h1 className={styles.title}>Awards &amp; Certifications</h1>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span>{totalAwards} entries</span>
                  </div>
                </div>
              </div>

              <p className={styles.subtitle}>
                Recognitions, certifications, and accomplishments earned
                throughout my academic and professional journey.
              </p>
            </div>
          </div>

          <a
            href="https://www.credly.com/users/charles-emmanuel-cruz/badges/credly"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.profileLink}
          >
            <span>credly.com</span>
            <VscLinkExternal size={14} />
          </a>
        </header>

        <div className={styles.articlesList}>
          {awards.map((award, index) => (
            <AwardCard key={award.id} award={award} index={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
