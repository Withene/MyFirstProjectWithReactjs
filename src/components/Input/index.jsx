import './styles.css';
import P from 'prop-types';
export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input className="ipt" onChange={handleChange} type="search" value={searchValue} placeholder="Type your search" />
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
