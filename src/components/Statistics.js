import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h1>Statistics</h1>

    <ul>
      <li> Good:{good} </li>
      <li> Neutral:{neutral}</li>
      <li> Bad: {bad}</li>
    </ul>
    <ul>
      <p> Total:{total} </p>
      <p> Positive feedback:{positivePercentage}</p>
    </ul>
  </div>
);

// Profile.defaultProps = {
//   avatar: imagePlacer,
// };

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
