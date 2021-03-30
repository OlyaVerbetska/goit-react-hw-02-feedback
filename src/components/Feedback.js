import React from 'react';

class Feedback extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };
  // }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGoodButton = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleNeutralButton = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBadButton = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const average = Math.round((this.state.good / total) * 100);
    if (isNaN(average)) {
      return '100';
    }
    return average;
  };

  render() {
    return (
      <div>
        <p>Please leave Feedback</p>
        <ul>
          <li>
            <button type="button" onClick={this.handleGoodButton}>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleNeutralButton}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleBadButton}>
              Bad
            </button>
          </li>
        </ul>
        <p>Statistics</p>
        <ul>
          <li>
            <span>Good:{this.state.good}</span>
          </li>
          <li>
            <span>Neutral:{this.state.neutral}</span>
          </li>
          <li>
            <span>Bad:{this.state.bad}</span>
          </li>
          <li>
            <span>Total:{this.countTotalFeedback()}</span>
          </li>
          <li>
            <span>Positive feedback:{this.countPositiveFeedbackPercentage()}%</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
