import { VscCalendar } from 'react-icons/vsc';

import { Award } from '@/types';

import styles from '@/styles/AwardCard.module.css';

interface AwardCardProps {
  award: Award;
  index: number;
}

const AwardCard = ({ award, index }: AwardCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.number}>
        <span>{String(index).padStart(2, '0')}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.main}>
          <h3 className={styles.title}>{award.title}</h3>

          {award.tags.length > 0 && (
            <div className={styles.tags}>
              {award.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <div className={styles.date}>
            <VscCalendar size={12} />
            <span>{award.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardCard;
