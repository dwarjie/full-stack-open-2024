import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        console.log(response)
        setPersons(response.data)
      })
      .catch(err => {
        console.log("Error fetching data: ${err}")
      })
  }, [])

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

  return (
    <div>
      <h2 style={{ fontWeight: "bold" }}>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch}/>
      <h2 style={{ fontWeight: "bold" }}>add new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} addNote={addNote}/>
      <h2 style={{ fontWeight: "bold" }}>Numbers</h2>
      <Persons persons={persons} search={search}/>
    </div>
  );
};

export default App;
