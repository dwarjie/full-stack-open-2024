import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const initialVote = new Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(initialVote)

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVote = () => {
    const newVote = [...vote]
    newVote[selected] += 1
    setVote(newVote)
  }

  const getMostVote = () => {
    const highest = Math.max(...vote)
    const highestIndex = vote.indexOf(highest)
    return (highest > 0) ? anecdotes[highestIndex] : "Vote your best anecdote!"
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} vote</p>
      <button onClick={randomAnecdote}>next anecdote</button>
      <button onClick={handleVote}>vote</button>
      <h1>Anecdote with most votes</h1>
      <p>{getMostVote()}</p>
    </>
  );
};

export default App;
