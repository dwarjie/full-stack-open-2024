const Total = ({ parts }) => {
  const computeTotalExercises = () => {
    return parts.reduce((result, part) => {
      return result + part.exercises
    }, 0)
  }
  
  return (
    <p>total of {computeTotalExercises()}</p>
  )
}

export default Total;
