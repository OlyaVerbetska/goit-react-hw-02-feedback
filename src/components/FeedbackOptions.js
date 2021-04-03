const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map((option, index) => (
      <button type="button" name={option} key={index} onClick={onLeaveFeedback}>
        {option[0].toUpperCase() + option.substring(1)}
      </button>
    ))}
  </ul>
);

export default FeedbackOptions;
