function SearchBar({onSearch}) { //? recibe una funcion
   return (
      <div>
          <input type='search' />
      <button onClick={onSearch }>Agregar</button> 
      </div>
   );
}
export default SearchBar