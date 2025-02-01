const Persons = ({ search, persons}) => {
  const renderNumbers = () => {
    if (!search) {
      return persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ));
    }

    return persons
      .filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase()),
      )
      .map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))
  };

  return (
    <>
      {renderNumbers()}
    </>
  )
}

export default Persons;
