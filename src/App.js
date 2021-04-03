import { Component } from 'react';
// import shortid from 'shortid';

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

  countPositiveFeedbackPercentage = () => Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    // const { good, neutral, bad } = this.state;
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

        <h1>Statistics</h1>
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              {option[0].toUpperCase() + option.substring(1)}:{this.state[option]}
            </li>
          ))}
        </ul>

        {/* <ul>
          <li> Good:{good} </li>
          <li> Neutral:{neutral}</li>
          <li> Bad: {bad}</li>
        </ul>
        <ul> */}
        <p> Total:{total} </p>
        <p> Positive feedback:{positiveFeedback}%</p>
        {/* </ul> */}
      </div>
    );
  }
}

export default App;
