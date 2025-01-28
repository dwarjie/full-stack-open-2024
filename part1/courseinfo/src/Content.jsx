import Part from "./Part";

const Content = (props) => {
  return (
    <>
      { props.contents.map((content, index) => (
        <Part part={content.name} exercise={content.exercises} key={index}/>
      ))}
    </>
  );
};

export default Content;
