import React from 'react'
import "../styles/login.css"
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";



function Login() {

  const [data,setDate] = useState( {
    usuario:"",
    contraseña:0
    
  }
  

  )
  return (

 
  <form>
  
    
  <div class="form-row">  
    <div className='border-div'> 
    <div >
      <br></br>
      <h1 className='titulo'>Bienvenido!</h1>
    </div >
    <div >
      <div className='label'>
         <label className='label'>usuario </label>
         <input type="text" placeholder='ingrese su usuario' onChange={(e)=>{
          setDate({ ...data, usuario:e.target.value})
         }

         }></input>
         </div>
         
        
        <div className='label'>
        <label className='label'>contraseña </label> 
            <input type="password" placeholder='ingrese su contraseña'></input>
            </div>  
           
        
        
        <div className="boton-div">
            <button onClick={sesion} type="submit" className="boton">
            iniciar sesion
            </button>
        </div> 
        
        
        </div>
        <label onClick={recordar} type="button" className='label-registro'>olvido su contraseña?</label>
        
        <label onClick={registrar} type="button" className='label-registro'>registrarse!</label>
    </div>
    
    </div>
    </form>
  
    
  )
  function recordar (){
    alert( "recordar contraseña");
  }
  function registrar (){
    alert( "crear nuevo usuario");
  }
  function sesion (){
    alert( data.usuario);
  }
}

export default Login