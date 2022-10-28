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
      <h1 className='titulo'>recuperar contraseña!</h1>
    </div >
    <div >
      <div className='label'>
         <label className='label'>correo electronico </label>
         <input type="text" placeholder='ingrese su correo electronico'>
         

        
        </input>
         </div>
         
        
        
        <div className="boton-div">
            <button  type="submit" className="boton">
            recuperar
            </button>
        </div> 
        <div className="boton-div">
            <button  type="submit" className="boton">
            cancelar
            </button>
        </div> 
        
        
        </div>
        
    </div>
    
    </div>
    </form>
  
    
  )
  
}

export default Recuperar