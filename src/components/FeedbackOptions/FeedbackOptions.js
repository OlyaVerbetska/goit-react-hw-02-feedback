import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={styles.buttonList}>
    {options.map((option, index) => (
      <li className={styles.buttonList__item}>
        <button type="button" name={option} key={index} onClick={onLeaveFeedback} className={styles.button}>
          {option[0].toUpperCase() + option.substring(1)}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;
