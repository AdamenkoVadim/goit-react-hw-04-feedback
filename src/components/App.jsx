import React from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = (state) => {
  this.setState(prevState => ({
    [state]:prevState[state] + 1,
}))
  this.countTotalFeedback()
}


countTotalFeedback = () => {
  const total = this.state.good + this.state.bad + this.state.neutral
  return total

}

countPositiveFeedbackPercentage = (total) => {
  const positiveFeedbackPercentage = Math.round((this.state.good / total) * 100);
  return positiveFeedbackPercentage;
}
  render () {
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options = {options}
            onLeaveFeedback = {this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {
          (this.state.good || this.state.bad || this.state.neutral > 0)
          ? <Statistics
              good = {this.state.good}
              neutral ={this.state.neutral}
              bad = {this.state.bad}
              total = {this.countTotalFeedback()}
              positivePersentage ={this.countPositiveFeedbackPercentage(this.countTotalFeedback())}
            />
          : <Notification
              message = "There is no feedback"
            />
          }

        </Section>
      </>
    );
  }
}


  

