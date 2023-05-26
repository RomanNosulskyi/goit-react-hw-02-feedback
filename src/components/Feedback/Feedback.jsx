import React from 'react';
import { onFeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { onStats } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

class onFeedback extends React.Component {
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
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <>
        <onFeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {this.countTotalFeedback() !== 0 ? (
          <onStats
            positivePercentage={this.countPositiveFeedbackPercentage()}
            good={good}
            bad={bad}
            neutral={neutral}
            total={this.countTotalFeedback()}
          />
        ) : (
          <Notification />
        )}
      </>
    );
  }
}
export { onFeedback };
