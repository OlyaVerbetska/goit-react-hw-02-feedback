import { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions.js';
import Section from './components/Section';
import Notification from './components/Notification';

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
        <Section title="Please leave Feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.leaveFeedback} />
        </Section>

        {total ? (
          <Section title="Statistics">
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positiveFeedback} />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}

export default App;
