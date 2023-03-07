function Card({onClose,name,species,gender,image}) { //? Rick
                        //? te estan llegando propiedades
   //* props como pense---> { name: "", species: "", gender: ""}
   //*                        ^           ^           ^
   //* tengo un objeto con propiedades, cambio su estrutura pero 
   //* se puede entrar y trabajar con el 
   console.log(onclose)
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="" />
      </div>
   );
}

export default Card;