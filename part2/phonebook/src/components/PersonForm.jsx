const PersonForm = ({ newName, newNumber, handleNewName, handleNewNumber, addNote }) => {

  return (
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
  )
}

export default PersonForm;
