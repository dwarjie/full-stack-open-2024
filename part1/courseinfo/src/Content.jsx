import Part from "./Part";

const Content = (props) => {
  return (
    <>
      { props.contents.map((content, index) => (
        <Part part={content.part} exercise={content.exercise} key={index}/>
      ))}
    </>
  );
};

export default Content;
