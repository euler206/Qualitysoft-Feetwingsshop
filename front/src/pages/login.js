import React, { useEffect } from "react";
import "../styles/login.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
//import JsonData from "../data/UsuariosData.json";
import { Container, Form } from "react-bootstrap";
import {login} from "../utils/Usuarios"
import alertify from "alertifyjs" 

function Login() {
  //localStorage.setItem("userInfo", JSON.stringify(dataRol));
  const [usuario, setusuario] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    login({correo:usuario,pass:password}).then(result => {
      if (result.Message) {
        alertify.error(result.Message)
      }else{        
        localStorage.setItem("userInfo", JSON.stringify(result));
        window.location.reload(true)
      }
    })
  }
 
  useEffect(() => {
  }, [])
  

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <div>
          <br></br>
          <h1 className="titulo">Bienvenido!</h1>
        </div>
        <div>
          <label className="label">
            Usuario
            <input
              type="user"
              placeholder="ingrese su usuario"
              value={usuario}
              onChange={(e) => {
                setusuario(e.target.value)
                
              }}
            ></input>
          </label>

          <label className="label">
            Contraseña
            <input
              type="pass"
              placeholder="ingrese su contraseña"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            ></input>
          </label>

          <div className="boton-div">
            <button  type="submit" className="boton">
              Iniciar sesion
            </button>
          </div>
        </div>
        <a href="/recuperar" type="button" className="label-registro">
          Olvido su contraseña?
        </a>
        <br></br>
        <a href="/registrar" className="label-registro">
          Registrarse!
        </a>
      </Container>
    </Form>
  );

  
}

export default Login;
