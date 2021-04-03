import { Component } from 'react';
// import shortid from 'shortid';
import Statistics from './components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = event => {
    const keyName = event.currentTarget.name;
    this.setState(prevState => ({
      [keyName]: prevState[keyName] + 1,
    }));
  };

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => String(Math.round((this.state.good / this.countTotalFeedback()) * 100)) + '%';

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <div className="Feedback">
        <h1>Please leave Feedback </h1>
        {options.map((option, index) => (
          <button type="button" name={option} key={index} onClick={this.leaveFeedback}>
            {option[0].toUpperCase() + option.substring(1)}
          </button>
        ))}
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positiveFeedback} />
        {/*
         */}
      </div>
    );
  }
}

export default App;
