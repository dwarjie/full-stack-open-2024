import Part from "./Part"; 

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, index) => (
        <Part name={part.name} exercise={part.exercises} key={index}/>
      ))}
    </>
  )
}

export default Content;
