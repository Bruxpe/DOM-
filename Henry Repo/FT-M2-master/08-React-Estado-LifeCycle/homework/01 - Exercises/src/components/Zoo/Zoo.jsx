import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {
   /* Escribe acá tu código */
   const [zoo, setZoo ] = React.useState({  
      zooName:'',
      animals:[],
      species:[],
      allAnimals:[]
   });
   console.log(zoo);

   const handleInputChang = (event) => { //* el nombre de event, es por convencion,NA MASa
      setZoo({
          ...zoo,
          zooName: event.target.value,
      })  
   }     
   
   const handleSpecies = (event)=>{
      const specie = event.target.value
      setZoo({
         ...zoo,
         animals: zoo.allAnimals.filter(animal => animal.specie=== specie)
         //*                  filter es un array total mente nuemro 
      })
   }

   const handleAllSpecies = ()=>{
       setZoo({
         ...zoo,
         animals: zoo.allAnimals
       })
      
   }

   React.useEffect(()=>{  //* Call back, el segundo es una array
      fetch('http://localhost:3001/zoo')
      .then(response => response.json()) //* a un archivo json
      .then(data => //* me estoy traendo la informacion
         setZoo({   
            ...zoo,
            animals: data.animals,
            species: data.species,
            allAnimals: data.animals,
         })
      )
      .catch((error) => console.log(error));
   },[] //* el array va a estar siempre
   )

   return (
      <div>
         <label htmlFor="">Zoo Name:</label>
         <input value={zoo.zooName} onChange={handleInputChang}/>
         <h1>{zoo.zooName}</h1>
         <Species species={zoo.species} 
         handleSpecies={handleSpecies} 
         handleAllSpecies={handleAllSpecies} />
         <Animals animals={zoo.animals}/>
          
         
      </div>
   );
}
 