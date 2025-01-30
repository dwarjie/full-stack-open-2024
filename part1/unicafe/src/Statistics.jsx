const Statistics = ({ good, neutral, bad }) => {
	const getFeedbackNumber = () => {
		return good + neutral + bad;
	};

	const getAverageFeedback = () => {
		let badScore = bad * -1;
		let totalScore = good + badScore;
		console.log(badScore, totalScore);
		return totalScore / getFeedbackNumber();
	};

	return (
		<>
			<p>good {good}</p>
			<p>neutral {neutral}</p>
			<p>bad {bad}</p>
			<p>all {getFeedbackNumber()}</p>
			<p>average {getAverageFeedback()}</p>
		</>
	);
};

export default Statistics;
