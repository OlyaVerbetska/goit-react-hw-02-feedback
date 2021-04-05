import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={styles.section}>
    <h1 className={styles.section__title}>{title}</h1>
    {children}
  </section>
);
export default Section;
