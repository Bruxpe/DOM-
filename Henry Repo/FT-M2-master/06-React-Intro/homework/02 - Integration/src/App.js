import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js' //? Este rick tiene un {}

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div id="Card">
        <Card             //! "Rick Sacnhes"
          name={Rick.name} //? --> aca name es como pepito, y le das Rick.name
        //? {} cdigo javascritp, a diferencia del otro, creo
        //? name:"rickname" species:"rick.species"
          species={Rick.species} //! "Human"
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters} //? recibimos una reglo de personajes
                    //? aca va a recibir un arreglo de propiedades
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  )
}

export default App
