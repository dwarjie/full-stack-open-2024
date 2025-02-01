const Total = ({ parts }) => {
  const computeTotalExercises = () => {
    return parts.reduce((result, part) => {
      return result + part.exercises
    }, 0)
  }
  
  return (
    <p style={{fontWeight: "bold"}}>total of {computeTotalExercises()} exercises</p>
  )
}

export default Total;
