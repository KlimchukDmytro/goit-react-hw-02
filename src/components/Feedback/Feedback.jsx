const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  return (
    <div>
      <h2>Feedback Summary</h2>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total feedback: {totalFeedback}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
};
export default Feedback;
