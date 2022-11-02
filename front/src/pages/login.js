import React from 'react'
import "../styles/login.css"
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";
import JsonData from "../data/UsuariosData.json";


function Login() {

  const [data,setDate] = useState( {
    usuario:"",
    contraseña:0
    
  }
  

  )
  return (

 
  <form>
  
    
     
    <div className='border-div'> 
    <div >
      <br></br>
      <h1 className='titulo'>Bienvenido!</h1>
    </div >
    <div >
         <label className='label'>usuario 
         <input type="user" placeholder='ingrese su usuario' onChange={(e)=>{
          setDate({ ...data, user:e.target.value})
         }

         }></input>
        </label> 
        

        <label className='label'>contraseña 
            <input type="pass" placeholder='ingrese su contraseña' onChange={(e)=>{
          setDate({ ...data, pass:e.target.value})
         }

         }></input>
            
           
        </label> 
        
        <div className="boton-div">
            <button onClick={VerInfo} type="submit" className="boton">
            iniciar sesion
            </button>
        </div> 
        
        
        </div>
        <label onClick={recordar} type="button" className='label-registro'>olvido su contraseña?</label>
        <br></br>
        <label onClick={registrar} type="button" className='label-registro'>registrarse!</label>
    </div>
    
    
    </form>
  
    
  )
  function recordar (){
    alert( "recordar contraseña");
  }
  function registrar (){
    alert( "crear nuevo usuario");
  }
  function Validacion(usuarioNombre, contrasena) {

    var decision = false;
    var datos = JsonData; //Integra o con express o con mongoDb   


    for (const usuario of datos) {            
        if (usuarioNombre === usuario.user && contrasena === usuario.pass) {
            decision = true;
        } 
    }
    return decision;
}
function VerInfo() {

  // eslint-disable-next-line eqeqeq

  console.log(Validacion(data.user, data.pass))
  if (Validacion(data.user, data.pass)) {
      alert("El usuario ingresado es correcto")
  } else {
      alert("Por favor verifique los datos ingresados")
  }
}

}

export default Login