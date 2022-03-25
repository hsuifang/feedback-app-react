import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  // Calculate ratings avg
  let average = feedback.length
    ? feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length
    : 0;
  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h5>Average Rating: {average}</h5>
    </div>
  );
}

export default FeedbackStats;
