import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className="Statistics">
    <li className={styles.Statistics__item}>
      {' '}
      <span className={styles.Statistics__name}>Good:</span>
      {good}{' '}
    </li>
    <li className={styles.Statistics__item}>
      {' '}
      <span className={styles.Statistics__name}>Neutral:</span>
      {neutral}
    </li>
    <li className={styles.Statistics__item}>
      {' '}
      <span className={styles.Statistics__name}>Bad: </span>
      {bad}
    </li>

    <li className={styles.Statistics__item}>
      {' '}
      <span className={styles.Statistics__name}>Total:</span>
      {total}{' '}
    </li>
    <li className={styles.Statistics__item}>
      {' '}
      <span className={styles.Statistics__name}>Positive feedback:</span>
      {positivePercentage}
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
