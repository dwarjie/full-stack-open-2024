const Filter = ({ search, handleSearch }) => {
  return (
    <div>
      filter to shown with a
      <input value={search} onChange={handleSearch} />
    </div>
  )
}

export default Filter;
