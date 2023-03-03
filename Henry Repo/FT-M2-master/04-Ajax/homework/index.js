const URL_BASE = "http://localhost:5000"; //? agregar /amigos
//boton --> id = boton
//div ---> id = listaboton
// el cuadro --> id = input
//donde va el nombre ---> id = amigo
const boton = document.querySelector("#boton");




function agregar(){
    const listaAmigos = document.querySelector("#listaamigos");
    
    listaAmigos.innerHTML = "";
    $.get(`${URL_BASE}/amigos`,(pepito) =>{
        pepito.forEach((amigo) => {
            const li = document.createElement("li");
            
            li.innerHTML = amigo.name + "   "+amigo.age ;
            listaAmigos.appendChild(li)
            console.log(listaAmigos.children.length);
            
        });
        
    });
    
}


const elimin = document.querySelector("#delete"); // Bboton eliminado 
const search = document.querySelector("#search");//el boton
const input = document.querySelector("#input") //  EL VALOR DEL CUADRO
const nombre = document.querySelector("#amigo") // aca va la rpt


function buscar(){
    const valor = input.value; // esto es lo quye yo pongo 
    $.get(`${URL_BASE}/amigos`,(pepito)=>{
    nombre.innerHTML= "Tu amigo buscado es--> \n " + pepito[input.value-1].name
    input.value = ""
    }
    )

}
search.addEventListener("click",buscar);

const input2 = document.querySelector("#inputDelete")
const valoraeliminar = input2.value;
console.log(valoraeliminar)
// <button id='delete'>Delete</button>
console.log(valoraeliminar);

function eliminarlo (){
    const success = document.querySelector("#success");
    const valoraeliminar = input2.value;
    

    $.get(`${URL_BASE}/amigos`,(pepito)=>{
        const nomb= pepito[valoraeliminar-1].name
        
    
    $.ajax({
        url: `${URL_BASE}/amigos/${valoraeliminar}`,
        type: "DELETE",
        success: ()=> {
            
            },
        })
        return success.innerHTML = `${nomb} Fue eliminado `
    })  
}
//?  <input id='inputDelete' value=""></input>

boton.addEventListener("click",agregar);
elimin.addEventListener("click",eliminarlo);
