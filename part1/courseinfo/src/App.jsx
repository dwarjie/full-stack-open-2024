import Header from "./Header"
import Content from "./Content"; 
import Total from "./Total"; 

const App = () => {
  const course = "Half Stack application development";
  const partObject = [
    { part: "Fundamentals of React", exercise: 10 },
    { part: "Using props to pass data", exercise: 7 },
    { part: "State of a component", exercise: 14 },
  ]

  return (
    <div>
      <Header header={course}/>
      <Content contents={partObject}/>
      <Total contents={partObject}/>
    </div>
  );
};

export default App;
