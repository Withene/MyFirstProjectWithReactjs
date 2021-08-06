import './styles.css'
export const Textinput = ({searchValue,handleChange}) => {
    return (
        <input 
        onChange={handleChange}
         type="search" 
         value={searchValue}
          />
    )


}