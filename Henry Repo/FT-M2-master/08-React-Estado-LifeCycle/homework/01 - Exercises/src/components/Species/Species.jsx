import React from 'react'

export default function Species ({species, handleSpecies,handleAllSpecies}) {

  return (
    <div>
       <h2>Species</h2>
      {
        species.map((specie, index)=> {
          return ( 
          <button value={specie}
          onClick={handleSpecies} 
          key={index}>{specie}</button>
          )
        })   
      }
      <button onClick={handleAllSpecies}>All Animals</button>

    </div>
  )
}
