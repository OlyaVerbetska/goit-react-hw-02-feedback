import React from 'react';

class Feedback extends React.Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  render() {
    return (
      <div>
        <p>Please leave Feedback</p>
        <ul>
          <li>
            <button type="button">Good</button>
          </li>
          <li>
            <button type="button">Neutral</button>
          </li>
          <li>
            <button type="button">Bad</button>
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
        </ul>
      </div>
    );
  }
}

export default Feedback;
