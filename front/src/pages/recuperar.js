import React from 'react'
import "../styles/login.css"
import 'bootstrap/dist/css/bootstrap.css';




function Recuperar() {

  
  

  
  return (

 
  <form>
  
    
  <div class="form-row">  
    <div className='border-div'> 
    <div >
      <br></br>
      <h1 className='titulo'>Recuperar!</h1>
    </div >
    <div >
      <div className='label'>
         <label className='label'>Correo Electronico </label>
         <input type="text" placeholder='Ingrese su correo electronico'>
         

        
        </input>
         </div>
         
        
        
        <div className="boton-div">
            <button  type="submit" className="boton">
            Recuperar
            </button>
        </div> 
        <div className="boton-div">
            <button  type="submit" className="boton">
            Cancelar
            </button>
        </div> 
        
        
        </div>
        
    </div>
    
    </div>
    </form>
  
    
  )
  
}

export default Recuperar