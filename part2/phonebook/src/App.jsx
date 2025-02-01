import { useState } from "react";

const App = () => {
  const personInitialValue = [
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ];

  const [persons, setPersons] = useState(personInitialValue);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    if (checkDuplicate()) {
      setNewName("");
      setNewNumber("");
      return alert(`${newName} is already added to phonebook.`);
    }

    const personObj = prepareNoteValues();
    setPersons(persons.concat(personObj));
    setNewName("");
    setNewNumber("");
  };

  const prepareNoteValues = () => {
    return {
      name: newName,
      number: newNumber,
    };
  };

  const checkDuplicate = () => {
    const existingName = persons.find(({ name }) => name === newName);

    return existingName;
  };

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
    <div>
      <h2 style={{ fontWeight: "bold" }}>Phonebook</h2>
      <div>
        filter to shown with a
        <input value={search} onChange={handleSearch} />
      </div>
      <h2 style={{ fontWeight: "bold" }}>add new</h2>
      <form onSubmit={addNote}>
        <div>
          name:
          <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number:
          <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2 style={{ fontWeight: "bold" }}>Numbers</h2>
      {renderNumbers()}
    </div>
  );
};

export default App;
