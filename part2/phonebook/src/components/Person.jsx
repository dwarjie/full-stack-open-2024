const Person = ({ person, handleDelete }) => {
  return (
    <p>
      {person.name} {person.number}&nbsp;
      <button onClick={() => handleDelete(person)}>delete</button>
    </p>
  )
}

export default Person;
