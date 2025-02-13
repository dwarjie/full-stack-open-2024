import { useState, useEffect } from "react";
import phonebookService from "./services/phonebook"; 
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList"; 
import "./index.css"
import Notification from "./components/Notification";

const App = () => {
  const NOTIFICATION_TIMER = 2000 // milliseconds
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    phonebookService.
      getAll()
      .then(data => {
        setPersons(data)
      })
      .catch(err => {
        startNotifTimer()
        setNotificationMessage(err)
        setIsError(true)
      })
  }, [])

  const deleteRecord = (person) => {
    if (!window.confirm(`Are you sure you want to delete ${person.name}?`)) return

    phonebookService
      .deleteNumber(person.id)
      .then(data => {
        startNotifTimer()
        setNotificationMessage(`Deleted: ${person.name}`)
        setPersons(persons.filter(person => person.id !== data.id))
      })
      .catch(err => {
        startNotifTimer()
        setNotificationMessage(err)
        setIsError(true)
      })
  }

  const addNote = (event) => {
    event.preventDefault();
    const existingRecord = checkDuplicate()
    if (existingRecord) {
      return updateNumber(existingRecord)
    }

    const personObj = prepareNoteValues();
    phonebookService
      .create(personObj)
      .then(() => {
        startNotifTimer()
        setNotificationMessage(`Added: ${personObj.name}`)
        setPersons(persons.concat(personObj));
        setNewName("");
        setNewNumber("");
      })
      .catch(err => {
        startNotifTimer()
        setNotificationMessage(err)
        setIsError(true)
      })
  };

  const updateNumber = (existingRecord) => {
    if (!window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) return;

    const updatedRecord = {...existingRecord, number: newNumber}
    phonebookService
      .update(existingRecord.id, updatedRecord)
      .then(data => {
        startNotifTimer()
        setNotificationMessage(`Updated: ${existingRecord.name}`)
        setPersons(persons.map(person => person.id === existingRecord.id ? data : person))
        setNewName("");
        setNewNumber("");
      })
      .catch(err => {
        startNotifTimer()
        setNotificationMessage(err)
        setIsError(true)
      })
  }

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

  const startNotifTimer = () => {
    setTimeout(() => {
      setNotificationMessage(null)
      setIsError(false)
    }, NOTIFICATION_TIMER)
  }

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };


  return (
    <div>
      <h2 style={{ fontWeight: "bold" }}>Phonebook</h2>
      <Notification message={notificationMessage} error={isError}/>
      <Filter search={search} handleSearch={handleSearch}/>
      <h2 style={{ fontWeight: "bold" }}>add new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} addNote={addNote}/>
      <h2 style={{ fontWeight: "bold" }}>Numbers</h2>
      <PersonsList persons={persons} search={search} handleDelete={deleteRecord}/>
    </div>
  );
};

export default App;
