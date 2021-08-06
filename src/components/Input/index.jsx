import './styles.css'
export const TextInput = ({searchValue,handleChange}) => {
    return (
        <input 
        onChange={handleChange}
         type="search" 
         value={searchValue}
         placeholder="Type your search"
          />
    )


}