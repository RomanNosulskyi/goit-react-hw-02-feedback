import React from 'react';
import { OnFeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions';
import { OnStats } from '../components/Feedback/Statistics/Statistics';
import { Notification } from '../components/Feedback/Notification/Notification';

class App extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    });

    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const summ = (this.state.good * 100) / this.countTotalFeedback();
    return Math.round(summ);
  };

  onLeaveFeedback = evt => {
    this.setState({ [evt]: this.state[evt] + 1 });
  };
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <>
        <OnFeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {this.countTotalFeedback() !== 0 ? (
          <OnStats
            positivePercentage={this.countPositiveFeedbackPercentage()}
            good={good}
            bad={bad}
            neutral={neutral}
            total={this.countTotalFeedback()}
          />
        ) : (
          <Notification
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        )}
      </>
    );
  }
}
export { App };
