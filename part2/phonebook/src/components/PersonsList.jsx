import Person from "./Person";

const PersonsList = ({ search, persons, handleDelete }) => {
  const renderNumbers = () => {
    if (!search) {
      return persons.map((person) => (
        <Person person={person} key={person.id} handleDelete={() => handleDelete(person)}/>
      ));
    }

    return persons
      .filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase()),
      )
      .map((person) => (
        <Person person={person} key={person.id} handleDelete={() => handleDelete(person)}/>
      ))
  };

  return (
    <>
      {renderNumbers()}
    </>
  )
}

export default PersonsList;
