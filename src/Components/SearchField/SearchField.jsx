const SearchField = ({ callback, value }) => {

  const onChange = (e) => {
    callback(e.target.value);
  }
  return (
    <input type="text" onChange={onChange} placeholder="Filter by name..." value={value} />
  );
}

export default SearchField;