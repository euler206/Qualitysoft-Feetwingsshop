
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function Registrar() {
return(

<form>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationServer01">Nombres</label>
      <input type="text" class="form-control is-valid" id="validationServer01" placeholder="nombres" value="" required>
      </input>
      <div class="valid-feedback">
     
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">Apellidos</label>
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="apellidos" value="" required>
      </input>
      <div class="valid-feedback">
       
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServerUsername">Nombre de usuario</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend3">@</span>
        </div>
        <input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="nombre de usuario" aria-describedby="inputGroupPrepend3" required>
        </input>
        <div class="invalid-feedback">
         
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer03">Nueva contraseña</label>
      <input type="text" class="form-control is-invalid" id="validationServer03" placeholder="contraseña" required>
      </input>
      <div class="invalid-feedback">
      
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer04">Celular</label>
      <input type="text" class="form-control is-invalid" id="validationServer04" placeholder="celular" required>
      </input>
      <div class="invalid-feedback">
        
      </div>
    </div>
    <div class="col-md-3 mb-3">
    <label>Sexo: </label>
        
        <select name="select">
            
            <option value="value1">Hombre</option> 
            <option value="value2" selected>Mujer</option>
        </select>
      <div class="invalid-feedback">
        
      </div>
    </div>
  </div>
 
  <button class="btn btn-primary" type="submit">Enviar</button>
</form>

 )
}
export default Registrar