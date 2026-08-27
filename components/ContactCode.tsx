import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'charlescruz.vercel.app',
    href: 'https://charlescruz.vercel.app',
  },
  {
    social: 'email',
    link: 'cruzcharles90@gmail.com',
    href: 'mailto:cruzcharles90@gmail.com',
  },
  {
    social: 'github',
    link: 'charlsieemman',
    href: 'https://github.com/charlsieemman',
  },
  {
    social: 'linkedin',
    link: 'charles-emmanuel-cruz',
    href: 'https://www.linkedin.com/in/charles-emmanuel-cruz/',
  },
  {
    social: 'twitter',
    link: 'emmaluneclasher',
    href: 'https://www.twitter.com/emmaluneclasher',
  },
  {
    social: 'telegram',
    link: 'emmaluneclasher',
    href: 'https://t.me/emmaluneclasher',
  },
  {
    social: 'facebook',
    link: 'charles-emmanuel-cruz',
    href: 'https://www.facebook.com/charles.e.cruz',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
