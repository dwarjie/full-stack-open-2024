const Total = (props) => {
  const exerciseNum = props.contents.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)
  
  return (
    <>
      {`Number of exercises ${exerciseNum}`}
    </>
  );
};

export default Total;
