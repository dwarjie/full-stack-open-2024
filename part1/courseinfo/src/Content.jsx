const Content = (props) => {
  return (
    <>
      { props.contents.map((content, index) => (
        <p key={index}>{content.part} {content.exercise}</p>
      ))}
    </>
  );
};

export default Content;
