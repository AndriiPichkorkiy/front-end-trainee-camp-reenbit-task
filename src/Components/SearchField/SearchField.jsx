import { Input } from "./SearchField.styled";

const SearchField = ({ callback, value }) => {

  const onChange = (e) => {
    callback(e.target.value);
  }
  return (
    <Input type="text" onChange={onChange} placeholder="Filter by name..." value={value} />
  );
}

export default SearchField;