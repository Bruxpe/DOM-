import React from 'react'
import './Contact.modules.css'


// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const valide= (inputs) => {
  let errors = {};

  
  if(!inputs.name){
    errors.name = 'Se requiere un nombre';
  }

  if(!regexEmail.test(inputs.email)){
    errors.email= 'Debe ser un correo electrónico'
  }   

  if(!inputs.message){
    errors.message = 'Se requiere un mensaje'
  }
  return errors;
}

export default function Contact () {

  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = React.useState({
    name:'',
    email:'',
    message:''
  });

  const handleChange =(event) => {

    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })

    setErrors(valide({
      
      ...inputs,
       [event.target.name]: event.target.value

    }))
  }

  const handleSumit = (event) => {
    event.preventDefault();
    if(!Object.values(errors).length){
      alert("Datos completos")
      setInputs({
        name:'',
        email:'',
        message:''
      })
      setErrors({
        name:'',
        email:'',
        message:''
      })
    }else{
      alert('Debe llenar todos los campos')
    }

     
  }

  return (   
    <form onSubmit={handleSumit}>
      <label htmlFor='nombre'>Nombre:</label>
        <input className={errors.name && 'warning'} onChange={handleChange} value={inputs.name} type="text" 
        name='name' placeholder='Escribe tu nombre...' />
        {errors.name &&  <p className='danger'>{errors.name}</p>}

      <hr />
      <label htmlFor="email">Correo Electrónico:</label>
        <input onChange={handleChange} value={inputs.email} type="text" 
        name='email' placeholder='Escribe tu email...' className={errors.email && 'warning'}/>
        {errors.email &&  <p className='danger'>{errors.email}</p>}

      <hr />
      <label htmlFor="message">Mensaje:</label>

      <textarea name="message" placeholder='Escribe tu mensaje...' type='text' value={inputs.message}
      onChange={handleChange}  className={errors.message && 'warning'}></textarea>
      {errors.message &&  <p className='danger'>{errors.message}</p>}

      <hr />  
      <button type='submit' onClick='{}'>Enviar</button>
      
    </form>
  )
}
