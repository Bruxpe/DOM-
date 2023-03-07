import Card from './Card';

function Cards({characters}) { //* Pordemos hacer destruturin directo a donde llega
   //const { characters } = props; //? --> Esta recibiendo un arreglo [{.},{.}]
  //*       [{...},{...},{...},{...},{...}]
   return (
      <div>
         { //*--> codigo javascritp, ponle llaves
         characters.map(({id,name,species,gender,image}) => {
            return < Card 
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
            />
         } )
         //* ers un conponent, no fucion , como esta en {Return}
         }
      </div>
   );
}

export default Cards;