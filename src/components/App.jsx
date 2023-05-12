import React from 'react';
import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedBack = { good, neutral, bad };

  const onLeaveFeedback = event => {
    if (event === 'good') {
      setGood(good + 1);
    } else if (event === 'neutral') {
      setNeutral(neutral + 1);
    } else if (event === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    const total = good + bad + neutral;
    return total;
  };

  const countPositiveFeedbackPercentage = total => {
    const positiveFeedbackPercentage = Math.round((good / total) * 100);
    return positiveFeedbackPercentage;
  };

  const options = Object.keys(feedBack);
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {good || bad || neutral > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePersentage={countPositiveFeedbackPercentage(
              countTotalFeedback()
            )}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
