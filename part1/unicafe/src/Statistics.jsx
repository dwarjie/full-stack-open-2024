import StatisticsLine from "./StatisticsLine";

const Statistics = ({ good, neutral, bad }) => {
  const getFeedbackNumber = () => {
    return good + neutral + bad;
  };

  const getAverageFeedback = () => {
    let badScore = bad * -1;
    let totalScore = good + badScore;
    let res = totalScore / getFeedbackNumber();
    return res ? res : 0;
  };

  const getPositivePercent = () => {
    return `${(good / getFeedbackNumber()) * 100}%`
  }

  return (
    <>
      <table>
        <tr>
          <StatisticsLine text={"good"} value={good} />
        </tr>
        <tr>
          <StatisticsLine text={"neutral"} value={neutral} />
        </tr>
        <tr>
          <StatisticsLine text={"bad"} value={bad} />
        </tr>
        <tr>
          <StatisticsLine text={"all"} value={getFeedbackNumber()} />
        </tr>
        <tr>
          <StatisticsLine text={"average"} value={getAverageFeedback()} />
        </tr>
        <tr>
          <StatisticsLine text={"postive"} value={getPositivePercent()} />
        </tr>
      </table>
    </>
  );
};

export default Statistics;
