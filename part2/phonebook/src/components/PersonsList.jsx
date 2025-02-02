import Person from "./Person";

const PersonsList = ({ search, persons, handleDelete }) => {
  const renderNumbers = () => {
    if (!search) {
      return persons.map((person) => (
        <Person person={person} key={person.name} handleDelete={handleDelete}/>
      ));
    }

    return persons
      .filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase()),
      )
      .map((person) => (
        <Person person={person} key={person.name} handleDelete={handleDelete}/>
      ))
  };

  return (
    <>
      {renderNumbers()}
    </>
  )
}

export default PersonsList;
